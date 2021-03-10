package entity

type Wawan struct {
	ID       uint   `gorm:"primaryKey;column:idwawan"`
	Nama     string `gorm:"column:nama"`
	Angkatan string `gorm:"column:angkatan"`
	Jurusan  string `gorm:"column:jurusan"`
	Fakta    string `gorm:"column:fakta"`
}
