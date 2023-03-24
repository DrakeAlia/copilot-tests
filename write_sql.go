// Copilot generating SQL for you 
package main

type CategorySummary struct {
	Tile string
	Tasks int
	AvgValue float64
}
func createTable(db *sql.DB) {
	db.Exec("CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT, value REAL, category TEXT, done INTEGER)")
}

func createCategorySummaries(db *sql.DB) ([]]CategorySummary, error) {
	var summaries []CategorySummary
	rows, err := db.Query("SELECT category, COUNT(*), AVG(value) FROM tasks GROUP BY category")
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	for rows.Next() {
		var summary CategorySummary
		err := rows.Scan(&summary.Tile, &summary.Tasks, &summary.AvgValue)
		if err != nil {
			return nil, err
		}
		summaries = append(summaries, summary)
	}
	return summaries, nil
}