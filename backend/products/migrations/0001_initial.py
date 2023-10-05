# Generated by Django 4.2.5 on 2023-09-11 11:18

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Produce",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=250)),
                ("description", models.CharField(max_length=5000)),
                ("price", models.DecimalField(decimal_places=2, max_digits=10)),
                ("brand", models.CharField(max_length=100)),
                (
                    "discount",
                    models.DecimalField(decimal_places=2, max_digits=10, null=True),
                ),
                ("colour", models.CharField(max_length=20, null=True)),
                ("image", models.CharField(max_length=200)),
            ],
        ),
    ]
