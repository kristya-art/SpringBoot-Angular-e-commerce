package com.example.GiftShop.catalog.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Locale;

@Entity
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private String id;
    @Column(name="name", nullable = false)
    private String name;
    @Column(name="subtitle")
    private String subtitle;
    @Column(name="price", precision = 6, scale = 2, nullable = false)
    private BigDecimal price;
    @Column(name="description", length = 5000)
    private String description;
    @Column(name="image_url")
    private String imageUrl;

    @Column(name="category")
    private Category category;
    @Column(name="status")
    private Status status;
    @Column(name="weight")
    private Long weight;
    @Column(name="packing")
    private Packing packing;


}
