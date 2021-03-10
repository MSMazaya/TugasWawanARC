package main

import (
	"backend/entity"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// getWawan is a function for ...
func getWawan(db *gorm.DB, id string) entity.Wawan {
	var wawan entity.Wawan
	db.First(&wawan, "idwawan = ?", id)
	return wawan
}

func main() {
	dsn := "root:accessdenied@tcp(127.0.0.1:3306)/testdb?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	r := gin.Default()

	r.GET("/wawan/:id", func(c *gin.Context) {
		wawan := getWawan(db, c.Param("id"))
		c.JSON(200, gin.H{
			"id":       wawan.ID,
			"nama":     wawan.Nama,
			"angkatan": wawan.Angkatan,
			"jurusan":  wawan.Jurusan,
			"fakta":    wawan.Fakta,
		})
	})
	r.Run()
}
