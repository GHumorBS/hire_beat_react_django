# Generated by Django 3.0.7 on 2020-09-17 16:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0004_categorys_subcategory'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='category',
            field=models.CharField(choices=[('Positive Attitude', 'Positive Attitude'), ('Work Commitment', 'Work Commitment'), ('Team Player Spirit', 'Team Player Spirit'), ('Leadership', 'Leadership'), ('Pressure Handling', 'Pressure Handling'), ('Self-Motivated', 'Self-Motivated'), ('Strong Work Ethic', 'Strong Work Ethic'), ('Creativity', 'Creativity'), ('Dependable & Reliable', 'Dependable & Reliable'), ('Detail Oriented', 'Detail Oriented'), ('Good Communication', 'Good Communication'), ('Problem Solving', 'Problem Solving')], default='Positive Attitude', max_length=50),
        ),
    ]
