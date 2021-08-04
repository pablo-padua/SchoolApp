package com.desafioEleva.eleva.Service;

import com.desafioEleva.eleva.DTO.SchoolDTO;
import com.desafioEleva.eleva.Entity.School;
import com.desafioEleva.eleva.Mapper.SchoolMapper;
import com.desafioEleva.eleva.Repository.SchoolRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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

    @Override
    public School editSchool(SchoolDTO schoolDTO) {
        if (schoolRepository.existsBySchoolCode(schoolDTO.getSchoolCode())) {
            School school = schoolRepository.findBySchoolCode(schoolDTO.getSchoolCode()).orElse(null);
            School editedSchool = schoolMapper.toEntity(schoolDTO);
            if (!(school == null)) {
                throw new BadRequestAlertException()
            }
            school = schoolMapper.fromSchoolToSchool(editedSchool, school);
            return schoolRepository.save(school);
        } else
            return null;
    }

    @Override
    public String deleteSchool(SchoolDTO schoolDTO) {
        return null;
    }

}
