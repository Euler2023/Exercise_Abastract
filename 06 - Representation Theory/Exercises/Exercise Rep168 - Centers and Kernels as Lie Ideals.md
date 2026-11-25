---
title: "Exercise Rep168: Centers and Kernels as Lie Ideals"
topic: representation-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - representation-theory
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 1, printed p. 73, PDF p. 85"
source_refs:
  - "S10/ch-3/sec-9/ex-1"
created: 2026-11-25
---

# Exercise Rep168: Centers and Kernels as Lie Ideals

## Problem Statement

> [!question] Original Chapter 3, Exercise 1
> (a) If $\mathfrak g$ is a Lie algebra, show that the center of $\mathfrak g$ is an ideal in $\mathfrak g$.
>
> (b) If $\mathfrak g$ and $\mathfrak h$ are Lie algebras and $\phi:\mathfrak g\to\mathfrak h$ is a Lie algebra homomorphism, show that the kernel of $\phi$ is an ideal in $\mathfrak g$.

## Hints

> [!hint]- Hint 1
> An ideal must be a linear subspace stable under taking a bracket with an arbitrary element of $\mathfrak g$.

> [!hint]- Hint 2
> For (a), use bilinearity to check the subspace property. For (b), apply $\phi$ to the bracket before testing whether it lies in the kernel.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation using Hall's definitions of center, ideal, and homomorphism [S10, §3.1, Definitions 3.5–3.6, printed p. 51, PDF p. 63].
>
> **(a)** Let $Z(\mathfrak g)=\{z\in\mathfrak g:[z,x]=0\text{ for all }x\in\mathfrak g\}$. For $z_1,z_2\in Z(\mathfrak g)$ and scalars $a,b$, bilinearity gives
> $$
> [az_1+bz_2,x]=a[z_1,x]+b[z_2,x]=0
> \qquad(x\in\mathfrak g).
> $$
> Since $0$ is central, $Z(\mathfrak g)$ is a subspace. If $x\in\mathfrak g$ and $z\in Z(\mathfrak g)$, then $[x,z]=-[z,x]=0\in Z(\mathfrak g)$. Thus the center is an ideal.
>
> **(b)** Since $\phi$ is linear, its kernel is a subspace. If $x\in\mathfrak g$ and $y\in\ker\phi$, then
> $$
> \phi([x,y])=[\phi(x),\phi(y)]=[\phi(x),0]=0.
> $$
> Hence $[x,y]\in\ker\phi$, so the kernel is an ideal.

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Adjoint Representation and Invariant Trace Forms|Adjoint Representation and Invariant Trace Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]

## Notes

- **Source status:** Both parts were checked against the 200 dpi rendering of printed p. 73 / PDF p. 85.
- **Connection:** The center is the kernel of the adjoint representation $x\mapsto\operatorname{ad}_x$. Here $\operatorname{ad}_x(y)=[x,y]$, and the representation is a Lie algebra homomorphism by the Jacobi identity [S10, §3.1, Definition 3.7 and Proposition 3.8, printed p. 51, PDF p. 63].
- **Routing:** The proof works with Lie ideals and bracket-preserving maps.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
