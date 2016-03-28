package com.tutorial.cucumber.book;

import java.util.Date;

/**
 * Created by mariannas on 26.03.16.
 */
public class Book {
    private  String title;
    private  String author;
    private  Date published;

    public Book(String title, String author, Date published) {
        this.title = title;
        this.author = author;
        this.published = published;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setPublished(Date published) {
        this.published = published;
    }
    public void setTitle(String title){
        this.title = title;
    }

    public Date getPublished() {
        return published;
    }
    public String getAuthor() {
        return author;
    }
    public String getTitle() {
        return title;
    }

}
