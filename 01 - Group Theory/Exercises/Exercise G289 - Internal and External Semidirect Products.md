---
title: "Exercise G289: Internal and External Semidirect Products"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - semidirect-products
  - automorphisms
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 12, printed p. 76, PDF p. 91"
created: 2026-08-28
---

# Exercise G289: Internal and External Semidirect Products

## Problem Statement

> [!question] Exercise 12
> Let $H,N$ be subgroups of a group $G$, with $N\trianglelefteq G$, and let $\gamma_x$ denote conjugation by $x$.
>
> **(a)** Show that $x\mapsto\gamma_x|_N$ defines a homomorphism $f:H\to\operatorname{Aut}(N)$.
>
> **(b)** If $H\cap N=\{e\}$, show that $H\times N\to HN$, $(x,y)\mapsto xy$, is a bijection, and that it is an isomorphism exactly when $f$ is trivial. If moreover $G=NH$, this is an internal semidirect product.
>
> **(c)** Conversely, given groups $N,H$ and a homomorphism $\psi:H\to\operatorname{Aut}(N)$, put a multiplication on $N\times H$ by
>
> $$
> (x_1,h_1)(x_2,h_2)
> =\bigl(x_1\psi(h_1)(x_2),h_1h_2\bigr).
> $$
>
> Show that this is a group and yields a semidirect product containing copies of $N$ and $H$.

## Hints

> [!hint]- Hint 1
> Uniqueness in (b) follows from $x_1^{-1}x_2=y_1y_2^{-1}\in H\cap N$.

> [!hint]- Hint 2
> For (c), use the homomorphism identity $\psi(h_1h_2)=\psi(h_1)\psi(h_2)$ when checking associativity.

## Solution

> [!success]- Solution
> **(a)** Normality makes $\gamma_x(N)=N$ for every $x\in H$, and
>
> $$
> \gamma_{xy}|_N=(\gamma_x|_N)\circ(\gamma_y|_N).
> $$
>
> Thus $f(x)=\gamma_x|_N$ is a homomorphism.
>
> **(b)** The multiplication map is onto $HN$. If $x_1y_1=x_2y_2$, then
>
> $$
> x_2^{-1}x_1=y_2y_1^{-1}\in H\cap N,
> $$
>
> so both sides are $e$ and the representation is unique. Hence the map is bijective.
>
> It is a homomorphism from the ordinary direct product precisely when
>
> $$
> (x_1y_1)(x_2y_2)=x_1x_2y_1y_2
> $$
>
> for all choices, which is equivalent to every $x\in H$ commuting with every $y\in N$. That is exactly $f(x)=\operatorname{id}_N$ for all $x$.
>
> **(c)** Associativity follows from
>
> $$
> \psi(h_1)\bigl(x_2\psi(h_2)(x_3)\bigr)
> =\psi(h_1)(x_2)\psi(h_1h_2)(x_3).
> $$
>
> The identity is $(e_N,e_H)$, and
>
> $$
> (x,h)^{-1}
> =\bigl(\psi(h^{-1})(x^{-1}),h^{-1}\bigr).
> $$
>
> The maps $x\mapsto(x,e_H)$ and $h\mapsto(e_N,h)$ embed $N$ and $H$. The first image is normal, their intersection is trivial, and every element factors uniquely as
>
> $$
> (x,h)=(x,e_H)(e_N,h).
> $$
>
> Conjugation by $(e_N,h)$ on $(x,e_H)$ is $\psi(h)(x)$. Hence this group is the external semidirect product $N\rtimes_\psi H$.

## Related Concepts

- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Exercises/Exercise G91 - A Retraction Gives an Internal Semidirect Product|Exercise G91]]

## Notes

- **Convention:** The external product is written $N\rtimes_\psi H$, with $H$ acting on $N$.
- **Source status:** [S2, Ch. I, Ex. 12, printed p. 76, PDF p. 91]. The verification is independent.
