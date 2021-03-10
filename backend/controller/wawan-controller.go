package controller

import (
	"backend/entity"
	"backend/service"

	"github.com/gin-gonic/gin"
)

type WawanController interface {
	Findall() []entity.Wawan
	Save(ctx *gin.Context) entity.Wawan
	Find(id int) entity.Wawan
}

type controller struct {
	service service.WawanService
}

func (c *controller) Findall() []entity.Wawan {
	return c.service.Findall()
}

func (c *controller) Find() entity.Wawan {
	var wawan entity.Wawan
	return wawan
}

func (c *controller) Save(ctx *gin.Context) entity.Wawan {
	var wawan entity.Wawan
	ctx.BindJSON(&wawan)
	c.service.Save(wawan)
	return wawan
}
