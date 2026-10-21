from django.http import JsonResponse
from .models import Project
from .models import Technology
from .models import Experience
from .models import AboutItem
from .models import Profile
from .models import SocialLink

def project_list(request):
    if request.method != 'GET':
        return JsonResponse({'error': 'Cette vue accepte uniquement les requêtes GET'}, status=405)
    
    projects = Project.objects.filter(
        is_published = True
    ).order_by("-created_at")

    project_data = []

    for project in projects:
        project_data.append({
            'id': project.id,
            'title': project.title,
            'description': project.description,
            'technologies': list(
                project.technologies.values_list('name', flat=True)
            ),
            'created_at': project.created_at,
            'image': project.image.url if project.image else None,
            "code_link": project.code_link if project.code_link else None,
            "demo_link": project.demo_link if project.demo_link else None
        })

    return JsonResponse({'projects': project_data})


def Technology_list(request):
    if request.method != 'GET':
        return JsonResponse({'error': 'Cette vue accepte uniquement les requêtes GET'}, status=405)

    technologies = Technology.objects.all().order_by('name')

    technology_data = []
    for tech in technologies:
        technology_data.append({
            'id': tech.id,
            'name': tech.name,
            "image": (
                tech.imageTechnology.url
                if tech.imageTechnology
                else None
            ),
        })

    return JsonResponse({'technologies': technology_data})



def experience_list(request):
    if request.method != 'GET':
        return JsonResponse({'error': 'Cette vue accepte uniquement les requêtes GET'}, status=405)

    experiences = Experience.objects.all().order_by('order')

    experience_data = []
    for exp in experiences:
        experience_data.append({
            'id': exp.id,
            'role': exp.role,
            'company': exp.company,
            'period': exp.period,
            'description': exp.description,
            "image": (
                exp.image.url
                if exp.image
                else None
            ),
        })

    return JsonResponse({'experiences': experience_data})


def about_item_list(request):
    if request.method != 'GET':
        return JsonResponse({'error': 'Cette vue accepte uniquement les requêtes GET'}, status=405)

    about_items = AboutItem.objects.all().order_by('order')
    about_data = []

    for about in about_items:
        about_data.append({
            'id': about.id,
            'title': about.title,
            'description': about.description,
            'order': about.order
        })

    return JsonResponse({'about_items': about_data})


##Creation d'une vue pour le modele Profile

def profile_list(request):  
    
    if request.method != 'GET':
        return JsonResponse({'error': 'Cette vue accepte uniquement les requêtes GET'}, status=405)

    profile = Profile.objects.first()

    if profile is None:
        return JsonResponse(
            {'error': 'Aucun profil n’a été enregistré.'},
            status=404
        )
    
    profile_data = []
    profile_data.append({
        'id': profile.id,
        'name': profile.name,
        'job_title': profile.job_title,
        'description': profile.description,
        'email': profile.email,
        "image": (
            profile.image.url
            if profile.image
            else None
        ),
    })

    return JsonResponse({'profile': profile_data})


def social_link_list(request):
    if request.method != 'GET':
        return JsonResponse(
            {'error': 'Cette vue accepte uniquement les requêtes GET'},
            status=405
        )

    social_links = SocialLink.objects.all()
    social_link_data = []

    for social_link in social_links:
        social_link_data.append({
            'id': social_link.id,
            'name': social_link.name,
            'url': social_link.url,
            'logo': social_link.logo.url if social_link.logo else None,
            'order': social_link.order,
        })

    return JsonResponse({'social_links': social_link_data})
