package com.desafioEleva.eleva.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

@Entity
@Table(name = "SCHOOL")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class School {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "SCHOOL_CODE", unique = true, nullable = false)
    private Long schoolCode;

    @Column(name = "SCHOOL_NAME", nullable = false)
    private String schoolName;

    @Column(name = "STUDENTS_COUNT", nullable = false)
    private Long studentCount;

    @Column(name = "CLASSES_COUNT", nullable = false)
    private Long classCount;

    @Column(name = "EMPLOYEES", nullable = false)
    private Long employeesCount;

    @Column(name = "SCHOOL_PHONE_NUMBER", nullable = false)
    private String schoolPhoneNumber;

    @Column(name = "CITY", nullable = false)
    private String city;

    @Column(name = "STATE", nullable = false)
    private String state;

    @Column(name = "COUNTRY", nullable = false)
    private String country;

    @Column(name = "EMAIL", nullable = false)
    private String schoolEmail;

    @Column(name = "PRINCIPAL", nullable = false)
    private String principal;

    @JsonBackReference
    @OneToMany(mappedBy = "classCode", fetch = FetchType.LAZY)
    private Set<Classroom> classroom;

    public void addClassroom(Classroom classroom) {
        this.classroom.add(classroom);
    }

}
