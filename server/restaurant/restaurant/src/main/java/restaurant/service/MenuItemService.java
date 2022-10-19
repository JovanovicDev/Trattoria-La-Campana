package restaurant.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import restaurant.model.MenuItem;
import restaurant.repository.MenuItemRepository;

@Component
public class MenuItemService {

	@Autowired
	MenuItemRepository menuItemRepository;
	
	public Page<MenuItem> findAll(Pageable page) {
		return menuItemRepository.findAll(page);
	}
	
	public Page<MenuItem> findFilteredMenuItems(Pageable page, String search) {
		return menuItemRepository.findByNameContains(page, search);
	}

	public MenuItem findOne(Long id) {
		return menuItemRepository.findById(id).get();
	}

	public MenuItem save(MenuItem menuItem) {
		return menuItemRepository.save(menuItem);
	}

	public void remove(Long id) {
		menuItemRepository.deleteById(id);
	}
	
}


