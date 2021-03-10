package service

import "backend/entity"

type WawanService interface {
	Findall() []entity.Wawan
	Save(entity.Wawan) entity.Wawan
}

type wawanService struct {
	wawan []entity.Wawan
}

func New() WawanService {
	return &wawanService{
		wawan: []entity.Wawan{},
	}
}

func (service *wawanService) Save(wawan entity.Wawan) entity.Wawan {
	service.wawan = append(service.wawan, wawan)
	return wawan
}

func (service *wawanService) Findall() []entity.Wawan {
	return service.wawan
}
