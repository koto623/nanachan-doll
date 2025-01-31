package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"sync"
)

// VoteData は投票データを管理する構造体
type VoteData struct {
	Votes map[string]int
	mu    sync.Mutex
}

// VoteResponse は投票結果のレスポンス構造体
type VoteResponse struct {
	Success      bool   `json:"success"`
	Message      string `json:"message"`
	Option       string `json:"option"`
	CurrentVotes int    `json:"currentVotes"`
}

var voteData = &VoteData{
	Votes: make(map[string]int),
}

func main() {
	// CORSミドルウェアを適用
	mux := http.NewServeMux()
	mux.HandleFunc("/api/vote1", enableCORS(handleVote))
	mux.HandleFunc("/api/result", enableCORS(handleResult))
	// 静的ファイルの提供
	fs := http.FileServer(http.Dir("static"))
	mux.Handle("/", fs)

	// サーバー設定
	server := &http.Server{
		Addr:    ":8080",
		Handler: mux,
	}

	fmt.Println("Server starting on http://localhost:8080")
	log.Fatal(server.ListenAndServe())
}

// CORSを有効にするミドルウェア
func enableCORS(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// CORSヘッダーの設定
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		// OPTIONSリクエストの処理
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next(w, r)
	}
}

func handleVote(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	body, err := io.ReadAll(r.Body)
	if err != nil {
		log.Printf("Error reading body: %v", err)
		sendJSONResponse(w, false, "Error reading request body", "", 0)
		return
	}

	// 構造体を int 型で定義
	var voteRequest struct {
		Vote int `json:"vote"`
	}

	if err := json.Unmarshal(body, &voteRequest); err != nil {
		log.Printf("Error decoding JSON: %v", err)
		log.Printf("Received body: %s", string(body))
		sendJSONResponse(w, false, "Invalid JSON format", "", 0)
		return
	}

	log.Printf("Received JSON: %+v\n", voteRequest)

	// int型を文字列に変換してマップのキーとして使用
	vote := fmt.Sprintf("%d", voteRequest.Vote)

	voteData.mu.Lock()
	voteData.Votes[vote]++
	count := voteData.Votes[vote]
	voteData.mu.Unlock()

	fmt.Println(voteData.Votes)
	sendJSONResponse(w, true, "投票が完了しました", vote, count)
}

func sendJSONResponse(w http.ResponseWriter, success bool, message, option string, votes int) {
	response := VoteResponse{
		Success:      success,
		Message:      message,
		Option:       option,
		CurrentVotes: votes,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func handleResult(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	voteData.mu.Lock()
	// 投票データのコピーを作成
	results := make(map[string]int)
	for k, v := range voteData.Votes {
		results[k] = v
	}
	voteData.mu.Unlock()

	// レスポンスの送信
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(results); err != nil {
		log.Printf("Error encoding response: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}
}
