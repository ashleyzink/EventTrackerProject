package com.skilldistillery.cookies.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cookie {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	private String description;
	
	@Column(name="ingredient_list")
	private String ingredientList;
	private String instructions;
	
	@Column(name="prep_time_minutes")
	private Integer prepTimeMinutes;
	
	@Column(name="bake_time_minutes")
	private Integer bakeTimeMinutes;
	private Integer yield;
	private String texture;
	private String comment;
	private String source;
	
	@Column(name="image_url")
	private String imageURL;
	
	

	public Cookie() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getIngredientList() {
		return ingredientList;
	}

	public void setIngredientList(String ingredientList) {
		this.ingredientList = ingredientList;
	}

	public String getInstructions() {
		return instructions;
	}

	public void setInstructions(String instructions) {
		this.instructions = instructions;
	}

	public Integer getPrepTimeMinutes() {
		return prepTimeMinutes;
	}

	public void setPrepTimeMinutes(Integer prepTimeMinutes) {
		this.prepTimeMinutes = prepTimeMinutes;
	}

	public Integer getBakeTimeMinutes() {
		return bakeTimeMinutes;
	}

	public void setBakeTimeMinutes(Integer bakeTimeMinutes) {
		this.bakeTimeMinutes = bakeTimeMinutes;
	}

	public Integer getYield() {
		return yield;
	}

	public void setYield(Integer yield) {
		this.yield = yield;
	}

	public String getTexture() {
		return texture;
	}

	public void setTexture(String texture) {
		this.texture = texture;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getImageURL() {
		return imageURL;
	}

	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Cookie [id=");
		builder.append(id);
		builder.append(", name=");
		builder.append(name);
		builder.append(", description=");
		builder.append(description);
		builder.append(", ingredientList=");
		builder.append(ingredientList);
		builder.append(", instructions=");
		builder.append(instructions);
		builder.append(", prepTimeMinutes=");
		builder.append(prepTimeMinutes);
		builder.append(", bakeTimeMinutes=");
		builder.append(bakeTimeMinutes);
		builder.append(", yield=");
		builder.append(yield);
		builder.append(", texture=");
		builder.append(texture);
		builder.append(", comment=");
		builder.append(comment);
		builder.append(", source=");
		builder.append(source);
		builder.append(", imageURL=");
		builder.append(imageURL);
		builder.append("]");
		return builder.toString();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cookie other = (Cookie) obj;
		if (id != other.id)
			return false;
		return true;
	}
	

}
