package restaurant.dto;

import restaurant.model.Category;
import restaurant.model.MenuItem;

public class MenuItemDTO {
	
	private Long id;
	private String name;
	private Category category;
	private double price;
	
	public MenuItemDTO() {
	}
	
	public MenuItemDTO(MenuItem m) {
		this.id = m.getId();
		this.name = m.getName();
		this.category = m.getCategory();
		this.price = m.getPrice();
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

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

}
