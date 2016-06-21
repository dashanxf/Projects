package com.xufeng.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.servlet.ModelAndView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

@Controller
public class HelloController{
	public static final String rest_uri = "http://pintimes.pin.news/api";

	@RequestMapping(value="/")
	public ModelAndView helloworld(){
		ModelAndView m = new ModelAndView("index");
		return m;
	}
	@RequestMapping(value="/category/{catId}")
	public ModelAndView get_C_byId(@PathVariable("catId") int catId) throws JSONException{
		ModelAndView m = new ModelAndView("/views/list/list");
		return m;
	}
	@RequestMapping(value="/category/content/{catId}")
	public ModelAndView get_Cat_byId(@PathVariable("catId") int catId) throws JSONException{
		ModelAndView m = new ModelAndView("/views/category/category");
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> response = restTemplate.getForEntity(
				rest_uri+"/content/term?term_id={catId}", String.class, Integer.toString(catId));
		JSONObject obj = new JSONObject(response.getBody());
		JSONArray obj_array = obj.getJSONObject("data").getJSONArray("post_contents");
		List<String> title = new ArrayList<String>();
		List<String> filtered_text = new ArrayList<String>();
		List<String> author = new ArrayList<String>();
		List<String> time = new ArrayList<String>();
		List<Integer> post_id = new ArrayList<Integer>();
		List<Integer> num_img = new ArrayList<Integer>();
		ArrayList<ArrayList<String>> img_addr_array = new ArrayList<ArrayList<String>>();
		for (int i=0;i<obj_array.length();i++){
			ArrayList<String> img_addr = new ArrayList<String>();
			obj = obj_array.getJSONObject(i);
			title.add(obj.getString("post_title"));
			post_id.add(obj.getInt("id"));
			filtered_text.add(obj.getJSONObject("post_content_filtered").getString("text"));
			author.add(obj.getJSONObject("post_author").getString("user_name"));
			time.add(obj.getString("post_date"));
			if(obj.getJSONObject("post_content_filtered").isNull("imgs"))
			{
				num_img.add(0);
				img_addr.add("Null");
				img_addr_array.add(img_addr);
			}
			else{
				JSONArray imgs = obj.getJSONObject("post_content_filtered").getJSONArray("imgs");
				int n = imgs.length();
				num_img.add(n);
				for(int j=0;j<n;j++){
					img_addr.add(imgs.getString(j));
				}
				img_addr_array.add(img_addr);
			}
		}
		m.addObject("post_title_array",title);
		m.addObject("post_content_filtered_text_array",filtered_text);
		m.addObject("post_author_array",author);
		m.addObject("post_time_array",time);
		m.addObject("post_num_img_array",num_img);
		m.addObject("post_img_array",img_addr_array);
		m.addObject("post_id_array",post_id);
		return m;
	}
	@RequestMapping(value="/myhome")
	public ModelAndView getmyhome(){
		ModelAndView m = new ModelAndView("/views/myhome");
		return m;
	}
	@RequestMapping(value="/detail/{post_id}")
	public ModelAndView get_Post_byId(@PathVariable("post_id") int post_id) throws JSONException{
		ModelAndView m = new ModelAndView("/views/detail/detail");
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<String> response = restTemplate.getForEntity(
				rest_uri+"/content/view?content_id={post_id}&filter_content=\true", String.class,Integer.toString(post_id));
		ResponseEntity<String> related_response = restTemplate.getForEntity(
				rest_uri+"/content/related?content_id={post_id}",String.class,Integer.toString(post_id));
		JSONObject obj = new JSONObject(response.getBody()).getJSONObject("data");
		JSONObject related_obj= new JSONObject(related_response.getBody()).getJSONObject("data");
		List<String> related_post_title = new ArrayList<String>();
		List<Integer> related_post_id = new ArrayList<Integer>();
		if(!related_obj.isNull("post_contents")){
		JSONArray related_obj_array = related_obj.getJSONArray("post_contents");
			for (int i=0;i<related_obj_array.length();i++){
				related_obj = related_obj_array.getJSONObject(i);
				related_post_title.add(related_obj.getString("post_title"));
				related_post_id.add(related_obj.getInt("id"));
			}
			m.addObject("related_post_array",related_post_title);
			m.addObject("related_post_id",related_post_id);
		}
		else{
			related_post_id.add(0);
			m.addObject("related_post_array","暂无相似文章.");
			m.addObject("related_post_id",related_post_id);
		}
		m.addObject("post_content", obj.getString("post_content"));
		m.addObject("post_title", obj.getString("post_title"));
		m.addObject("post_author_name", obj.getJSONObject("post_author").getString("user_name"));
		return m;
	}
}