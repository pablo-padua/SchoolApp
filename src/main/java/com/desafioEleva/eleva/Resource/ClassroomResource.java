package com.desafioEleva.eleva.Resource;

import com.desafioEleva.eleva.DTO.ClassroomDTO;
import com.desafioEleva.eleva.Entity.Classroom;
import com.desafioEleva.eleva.Service.ClassroomService;
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

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class ClassroomResource {

    @Autowired
    ClassroomService classroomService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/add-classroom")
    public Classroom addClassroom(@RequestBody ClassroomDTO classroomDTO) {
        return classroomService.addClassroom(classroomDTO);
    }

    @GetMapping("/get-classroom-list")
    public List<Classroom> getClassroomList() {
        return classroomService.getClassroomList();
    }

    @PutMapping("update-classroom")
    public Classroom updateClassroom(@RequestBody ClassroomDTO classroomDTO) {
        return classroomService.updateClassroom(classroomDTO);
    }

    @DeleteMapping("delete-classroom/{classCode}")
    public ResponseEntity<String> deleteClassroom(@PathVariable Long classCode) {
        return new ResponseEntity<>(classroomService.deleteClassroom(classCode), HttpStatus.OK);
    }

}
