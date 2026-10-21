from django.db import models


##Creation du modele Technology pour le portfolio avec le champ name

class Technology(models.Model):
    name = models.CharField(max_length=100, unique=True)
    imageTechnology = models.ImageField(upload_to='technologies/', blank=True, null=True)
    def __str__(self):
        return self.name



##creation du modele Project pour le portfolio avec les champs title, description, image et link
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    technologies = models.ManyToManyField('Technology', related_name='projects')
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    code_link = models.URLField()
    demo_link = models.URLField(blank=True)
    is_published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


##Creation d'un modele Experience

class Experience(models.Model):
    role = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    period = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='experiences/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.role} at {self.company}"


##Modele A propos

class AboutItem(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    order = models.PositiveIntegerField(default=0)

    class Meta: 
        ordering = ["order"]

    def __str__(self):
        return self.title

###Modele Profile pour le portfolio 

class Profile(models.Model):
    name = models.CharField(max_length=100)
    job_title = models.CharField(max_length=150)
    description = models.TextField()
    email = models.EmailField(blank=True)
    image = models.ImageField(
        upload_to="profile/",
        blank=True,
        null=True
    )

    def __str__(self):
        return self.name


#Modele social Link

class SocialLink(models.Model):
    name = models.CharField(max_length=50)
    url = models.URLField()
    logo = models.ImageField(
        upload_to="social_links/",
        blank=True,
        null=True
    )
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.name
