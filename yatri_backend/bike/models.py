from django.db import models

# Create your models here.


class Feeds(models.Model):
    name = models.CharField(max_length=300, null=True, blank=True, unique=True)
    url = models.URLField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "feedback"
