package com.desafioEleva.eleva.Service;

import com.desafioEleva.eleva.DTO.ClassroomDTO;
import com.desafioEleva.eleva.Entity.Classroom;
import com.desafioEleva.eleva.Entity.School;
import com.desafioEleva.eleva.Mapper.ClassroomMapper;
import com.desafioEleva.eleva.Repository.ClassroomRepository;
import com.desafioEleva.eleva.Repository.SchoolRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassroomServiceImpl implements ClassroomService {

    private final ClassroomRepository classroomRepository;
    private final ClassroomMapper classroomMapper;
    private final SchoolRepository schoolRepository;

    public ClassroomServiceImpl(ClassroomRepository classroomRepository,
                                ClassroomMapper classroomMapper,
                                SchoolRepository schoolRepository) {
        this.schoolRepository = schoolRepository;
        this.classroomRepository = classroomRepository;
        this.classroomMapper = classroomMapper;
    }

    @Override
    public Classroom addClassroom(ClassroomDTO classroomDTO) {
        Classroom classroom = classroomMapper.toEntity(classroomDTO);
        if (!(classroom == null)) {
            School school = schoolRepository.findBySchoolCode(classroom.getSchool().getSchoolCode()).orElse(null);
            if (school != null) {
                school.addClassroom(classroom);
                classroom.setSchool(school);
                schoolRepository.save(school);
            }
            return classroomRepository.save(classroom);
        } else
            return null;
    }

    @Override
    public List<Classroom> getClassroomList(){
         return classroomRepository.findAll();
    }
}
