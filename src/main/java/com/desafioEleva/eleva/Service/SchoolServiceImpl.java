package com.desafioEleva.eleva.Service;

import com.desafioEleva.eleva.DTO.SchoolDTO;
import com.desafioEleva.eleva.Entity.School;
import com.desafioEleva.eleva.Mapper.SchoolMapper;
import com.desafioEleva.eleva.Repository.SchoolRepository;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class SchoolServiceImpl implements SchoolService {

    private final SchoolRepository schoolRepository;
    private final SchoolMapper schoolMapper;

    SchoolServiceImpl(SchoolMapper schoolMapper, SchoolRepository schoolRepository) {
        this.schoolMapper = schoolMapper;
        this.schoolRepository = schoolRepository;
    }

    @Override
    public School addSchool(SchoolDTO schoolDTO) {
        School school = schoolMapper.toEntity(schoolDTO);
        return schoolRepository.save(school);
    }

    @Override
    public List<School> getSchools() {
        return schoolRepository.findAll();
    }

    @SneakyThrows
    @Override
    public School updateSchool(SchoolDTO schoolDTO) {
        if (schoolRepository.existsBySchoolCode(schoolDTO.getSchoolCode())) {
            School school = schoolRepository.findBySchoolCode(schoolDTO.getSchoolCode()).orElse(null);
            School editedSchool = schoolMapper.toEntity(schoolDTO);
            if (school == null) {
                throw new Exception("School can't be null");
            }
            school = schoolMapper.fromSchoolToSchool(editedSchool, school);
            return schoolRepository.save(school);
        } else
            return null;
    }

    @Override
    public String deleteSchool(Long classCode) {
        if (schoolRepository.existsBySchoolCode(classCode)) {
            schoolRepository.deleteBySchoolCode(classCode);
            return String.format("School with School Code: %s successfully deleted!", classCode);
        } else
            return "Class Code Not Found";
    }
}
