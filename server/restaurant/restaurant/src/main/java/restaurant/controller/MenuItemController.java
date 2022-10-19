package restaurant.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import restaurant.dto.MenuItemDTO;
import restaurant.model.MenuItem;
import restaurant.service.MenuItemService;


@RestController
@RequestMapping(value = "api/items")
@CrossOrigin(origins = "http://localhost:4200")
public class MenuItemController {
	@Autowired
	MenuItemService menuItemService;

	@RequestMapping(method = RequestMethod.GET, produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<List<MenuItemDTO>> getAllMenuItems(Pageable page) {
		Page<MenuItem> menuItems = menuItemService.findAll(page);
		String pageCount = String.valueOf(menuItems.getTotalPages());
		
		List<MenuItemDTO> retVal = new ArrayList<>();
	
		for(MenuItem m : menuItems) {
			retVal.add(new MenuItemDTO(m));
		}
		
		HttpHeaders headers = new HttpHeaders();
	    headers.add("Access-Control-Expose-Headers", "Page-Count");
	    headers.add("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Page-Count");
	    headers.add("Page-Count", pageCount);

		return new ResponseEntity<>(retVal, headers, HttpStatus.OK); 
	}
	
	@RequestMapping(method = RequestMethod.GET, params = "search", produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<List<MenuItemDTO>> getFilteredMenuItems(Pageable page, @RequestParam String search) {
		Page<MenuItem> filteredMenuItems = menuItemService.findFilteredMenuItems(page, search);
		String pageCount = String.valueOf(filteredMenuItems.getTotalPages());
		
		List<MenuItemDTO> retVal = new ArrayList<>();
	
		for(MenuItem m : filteredMenuItems) {
			retVal.add(new MenuItemDTO(m));
		}
		
		HttpHeaders headers = new HttpHeaders();
	    headers.add("Access-Control-Expose-Headers", "Page-Count");
	    headers.add("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Page-Count");
	    headers.add("Page-Count", pageCount);

		return new ResponseEntity<>(retVal, headers, HttpStatus.OK); 
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<MenuItemDTO> getMenuItem(@PathVariable Long id) {
		MenuItem item = menuItemService.findOne(id);
		MenuItemDTO dto = new MenuItemDTO(item);

		return new ResponseEntity<>(dto, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<MenuItemDTO> create(@RequestBody MenuItemDTO menuItemDTO) {
		
		MenuItem item = new MenuItem();
		item.setName(menuItemDTO.getName());
		item.setCategory(menuItemDTO.getCategory());
		item.setPrice(menuItemDTO.getPrice());
		
		item = menuItemService.save(item);

		return new ResponseEntity<>(new MenuItemDTO(item), HttpStatus.CREATED);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<MenuItemDTO> update(@PathVariable Long id,
			@RequestBody MenuItemDTO menuItemDTO) {
		
		MenuItem item = new MenuItem();
		item.setId(menuItemDTO.getId());
		item.setName(menuItemDTO.getName());
		item.setCategory(menuItemDTO.getCategory());
		item.setPrice(menuItemDTO.getPrice());
		
		item = menuItemService.save(item);

		return new ResponseEntity<>(new MenuItemDTO(item), HttpStatus.OK);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		MenuItem item = menuItemService.findOne(id);
		if (item != null) {
			menuItemService.remove(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
}
