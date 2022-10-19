package restaurant.dto;

import restaurant.model.Category;

public class CategoryDTO {
	
	private Long id;
	private String name;
	
	public CategoryDTO() {
	}
	
	public CategoryDTO(Category c) {
		this.id = c.getId();
		this.name = c.getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
