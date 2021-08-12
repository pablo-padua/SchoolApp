package com.desafioEleva.eleva.Resource;

import com.desafioEleva.eleva.DTO.SchoolDTO;
import com.desafioEleva.eleva.Entity.School;
import com.desafioEleva.eleva.Service.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.ws.Response;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:4200", "padua-school-app.herokuapp.com"})
public class SchoolResource {

    @Autowired
    SchoolService schoolService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/add-school")
    public School addSchool(@RequestBody SchoolDTO schoolDTO) {
        return schoolService.addSchool(schoolDTO);
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @GetMapping("/get-schools-list")
    public List<School> getSchools() {
        return schoolService.getSchools();
    }

    @PutMapping("/update-school")
    public School updateSchool(@RequestBody SchoolDTO schoolDTO) {
        return schoolService.updateSchool(schoolDTO);
    }

    @DeleteMapping("delete-school/{classCode}")
    public ResponseEntity<String> deleteSchool(@PathVariable Long classCode) {
        return new ResponseEntity(schoolService.deleteSchool(classCode), HttpStatus.OK);
    }

}
