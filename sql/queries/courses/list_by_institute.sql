SELECT
    COUNT(*) OVER()::NUMERIC AS full_count,
    course.course_id,
    course.course_name,
    course.year,
    course.term,
    CASE
        WHEN course.term
            THEN CONCAT('WT', course.year, '/', course.year+1)
            ELSE CONCAT('ST', course.year)
        END AS season,
    course.lecturer,
    course.institute_id,
    institute.institute_name,
    university.university_id,
    university.university_name
FROM Courses course
    JOIN Institutes institute ON institute.institute_id = course.institute_id
    JOIN Universities university ON university.university_id = institute.university_id
WHERE
    course.institute_id=$3::INTEGER
ORDER BY
    year DESC,
    course_name ASC
OFFSET $1
LIMIT $2;