package restaurant.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import restaurant.dto.CategoryDTO;
import restaurant.model.Category;
import restaurant.service.CategoryService;

@RestController
@RequestMapping(value = "api/categories")
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {
	@Autowired
	CategoryService categoryService;
	
	@RequestMapping(method = RequestMethod.GET, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<List<CategoryDTO>> getAllCategories() {
		List<Category> categories = categoryService.findAll();
		List<CategoryDTO> retVal = new ArrayList<>();
	
		for(Category c : categories) {
			retVal.add(new CategoryDTO(c));
		}
		
		return new ResponseEntity<>(retVal, HttpStatus.OK); 
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<CategoryDTO> getCategory(@PathVariable Long id) {
		Category category = categoryService.findOne(id);
		CategoryDTO dto = new CategoryDTO(category);

		return new ResponseEntity<>(dto, HttpStatus.OK);
	}
}
