package restaurant.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import restaurant.model.Category;
import restaurant.repository.CategoryRepository;

@Component
public class CategoryService {
	
	@Autowired
	CategoryRepository categoryRepository;

	public List<Category> findAll() {
		return categoryRepository.findAll();
	}
	
	public Category findOne(Long id) {
		return categoryRepository.findById(id).get();
	}
}
