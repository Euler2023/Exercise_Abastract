---
title: "Exercise G22: Rotations and Reflections by Conjugation"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - plane-isometries
  - conjugation
  - normal-forms
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 3, Ex. 3.6, printed p. 188, PDF p. 200"
created: 2026-08-10
---

# Exercise G22: Rotations and Reflections by Conjugation

## Problem Statement

> [!question] Exercise
> **(a)** Let $s$ be rotation through angle $\pi/2$ about $p=(1,1)^t$. Write $s$ as a product $t_a\rho_\theta$.
>
> **(b)** Let $s$ be reflection about the vertical line $x=1$. Find an isometry $g$ such that $grg^{-1}=s$, where $r$ is reflection about the horizontal axis, and write $s$ in the form $t_a\rho_\theta r$.

## Hints

> [!hint]- Hint 1
> Rotation about a point $p$ is $t_p\rho_\theta t_{-p}$.

> [!hint]- Hint 2
> A conjugate $grg^{-1}$ is reflection about the image under $g$ of the horizontal axis.

## Solution

> [!success]- Solution
> ### (a) Rotation about $(1,1)^t$
> Let
> $$p=\begin{pmatrix}1\\1\end{pmatrix},
> \qquad \rho=\rho_{\pi/2}.$$
> Rotation through $\pi/2$ about $p$ is
> $$s=t_p\rho t_{-p}.$$
> Using $\rho t_{-p}=t_{-\rho(p)}\rho$,
> $$s=t_{p-\rho(p)}\rho.$$
> Now
> $$\rho(p)=\begin{pmatrix}-1\\1\end{pmatrix},$$
> so
> $$p-\rho(p)=\begin{pmatrix}2\\0\end{pmatrix}.$$
> Therefore
> $$s=t_{(2,0)^t}\rho_{\pi/2}.$$
> Indeed, $s(x,y)=(2-y,x)$, which fixes $(1,1)$.
>
> ### (b) Reflection about $x=1$
> Choose
> $$g=t_{(1,0)^t}\rho_{\pi/2}.$$
> This isometry sends the horizontal axis to the vertical line $x=1$. Hence
> $$grg^{-1}$$
> is reflection about that vertical line, so it equals $s$.
>
> To put $s$ in normal form, observe that $\rho_\pi r$ is reflection about the vertical axis $x=0$:
> $$\rho_\pi r(x,y)=(-x,y).$$
> Translating the result two units to the right gives
> $$s(x,y)=(2-x,y).$$
> Thus
> $$s=t_{(2,0)^t}\rho_\pi r.$$
> This is the required form. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Rotations Reflections and Glide Reflections|Rotations, Reflections, and Glide Reflections]]
- [[01 - Group Theory/Concepts/Symmetry Groups and Plane Isometries|Symmetry Groups and Plane Isometries]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

The general formula for rotation through $\theta$ about $p$ is
$$t_p\rho_\theta t_{-p}=t_{p-\rho_\theta(p)}\rho_\theta.$$

**Source status:** The normal form and change-of-coordinates rule are proved in [S1, Ch. 6, printed pp. 159–160, PDF pp. 171–172]. Both requested formulas are computed explicitly above.

