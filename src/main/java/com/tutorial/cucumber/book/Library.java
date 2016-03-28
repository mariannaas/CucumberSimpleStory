package com.tutorial.cucumber.book;

import com.tutorial.cucumber.book.Book;

import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by mariannas on 26.03.16.
 */
public class Library {
    public List<Book> store= new ArrayList<Book> ();

    public void addBook(Book book){
        store.add(book);
    }

    public List<Book> findBooks(final Date from, final Date to){
        Calendar end = Calendar.getInstance();
        end.setTime(to);
        end.roll(Calendar.YEAR, 1);

        return store.stream().filter(book -> {
            return from.before(book.getPublished()) && end.getTime().after(book.getPublished());
        }).sorted(Comparator.comparing(Book::getPublished).reversed()).collect(Collectors.toList());
    }
}
