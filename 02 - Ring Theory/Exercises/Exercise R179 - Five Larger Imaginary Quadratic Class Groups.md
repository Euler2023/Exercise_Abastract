---
title: "Exercise R179: Five Larger Imaginary Quadratic Class Groups"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - class-groups
  - binary-quadratic-forms
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 8, Computing the Class Group, Ex. 8.6, printed p. 410, PDF p. 422"
created: 2026-08-28
---

# Exercise R179: Five Larger Imaginary Quadratic Class Groups

## Problem Statement

> [!question] Exercise 8.6
> Determine the class group in each case:
>
> **(a)** $d=-41$, **(b)** $d=-57$, **(c)** $d=-61$, **(d)** $d=-77$, **(e)** $d=-89$.

## Hints

> [!hint]- Hint 1
> For these five rings $R=\mathbb Z[\sqrt d]$, the discriminant is $D=4d$. Enumerate the reduced primitive positive-definite forms $(a,b,c)$ with $b^2-4ac=D$.

> [!hint]- Hint 2
> Conjugation sends $(a,b,c)$ to $(a,-b,c)$. A reduced class is ambiguous, hence has order dividing two, exactly when its reduced representative has $b=0$, $|b|=a$, or $a=c$.

## Solution

> [!success]- Solution
> We use the classical bijection between ideal classes of the quadratic order of discriminant $D$ and proper equivalence classes of primitive positive-definite binary quadratic forms of discriminant $D$. Every class has a unique reduced representative satisfying
>
> $$
> |b|\le a\le c,
> \qquad
> b^2-4ac=D,
> $$
>
> with the usual positive-$b$ convention on the boundary. Direct finite enumeration gives:
>
> $$
> \begin{array}{c|c|l}
> d&D&\text{reduced forms }(a,b,c)\\ \hline
> -41&-164&(1,0,41),(2,2,21),(3,\pm2,14),(5,\pm4,9),(6,\pm2,7)\\
> -57&-228&(1,0,57),(2,2,29),(3,0,19),(6,6,11)\\
> -61&-244&(1,0,61),(2,2,31),(5,\pm4,13),(7,\pm6,10)\\
> -77&-308&(1,0,77),(2,2,39),(3,\pm2,26),(6,\pm2,13),(7,0,11),(9,4,9)\\
> -89&-356&(1,0,89),(2,2,45),(3,\pm2,30),(5,\pm2,18),(6,\pm2,15),\\
> &&(7,\pm6,14),(9,\pm2,10).
> \end{array}
> $$
>
> Thus the class numbers are respectively $8,4,6,8,12$. To determine the abelian group structures, count the nonidentity ambiguous classes:
>
> - For $d=-41$, only $(2,2,21)$ is nonidentity ambiguous. An abelian group of order $8$ with exactly one nonidentity element of order two is cyclic, so $\operatorname{Cl}(R)\cong C_8$.
> - For $d=-57$, all three nonidentity classes are ambiguous, so $\operatorname{Cl}(R)\cong C_2\times C_2$.
> - For $d=-61$, only $(2,2,31)$ is nonidentity ambiguous. Hence $\operatorname{Cl}(R)\cong C_6$.
> - For $d=-77$, the nonidentity ambiguous forms are $(2,2,39)$, $(7,0,11)$, and $(9,4,9)$. Hence $\operatorname{Cl}(R)\cong C_4\times C_2$.
> - For $d=-89$, only $(2,2,45)$ is nonidentity ambiguous. Hence $\operatorname{Cl}(R)\cong C_{12}$.
>
> Therefore
>
> $$
> \boxed{
> \begin{aligned}
> d=-41&:\ C_8, & d=-57&:\ C_2\times C_2,\\
> d=-61&:\ C_6, & d=-77&:\ C_4\times C_2,\\
> d=-89&:\ C_{12}.&&
> \end{aligned}}
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]

## Notes

- **Routing:** Ring Theory is primary because the target is the multiplicative group of fractional-ideal classes.
- **External standard input:** The ideal-class/binary-quadratic-form correspondence and the reduced-form uniqueness and ambiguity criteria are classical results not proved in this note. The displayed enumeration itself is an independent finite computation.
- **Computational verification:** For each negative discriminant, the reduced inequalities bound $a\le\sqrt{|D|/3}$, so the table was checked by exhaustive integer enumeration of that finite range.
- **Source status:** The exercise is from [S1, Ch. 13, §13.8, Ex. 8.6, printed p. 410, PDF p. 422]. Artin asks for the class groups; the form-based derivation here is independent.
