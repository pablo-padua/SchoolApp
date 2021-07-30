package com.desafioEleva.eleva.Resource;

import com.desafioEleva.eleva.DTO.SchoolDTO;
import com.desafioEleva.eleva.Entity.School;
import com.desafioEleva.eleva.Service.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
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
    public List<School> getSchools(){
        return schoolService.getSchools();
    }

}
