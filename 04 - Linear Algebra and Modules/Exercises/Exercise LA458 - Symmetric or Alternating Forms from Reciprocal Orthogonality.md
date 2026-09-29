---
title: "Exercise LA458: Symmetric or Alternating Forms from Reciprocal Orthogonality"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - bilinear-forms
  - alternating-forms
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 16, printed p. 598, PDF p. 613"
created: 2026-09-29
---

# Exercise LA458: Symmetric or Alternating Forms from Reciprocal Orthogonality

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 16
> Let $E$ be a vector space over a field $k$ and let $g$ be a bilinear form on $E$. Assume that whenever $x,y\in E$ are such that $g(x,y)=0$, then $g(y,x)=0$. Show that $g$ is symmetric or alternating.

## Hints

> [!hint]- Hint 1
> If $g(x,x)=0$ for every $x$, the form is alternating by definition. Otherwise choose $e$ with $g(e,e)\ne0$ and split off the line $ke$.

> [!hint]- Hint 2
> For $x,y$ orthogonal to $e$, choose $a\in k$ so that $g(e+x,ae+y)=0$. Apply the assumed reciprocal vanishing to recover $g(y,x)=g(x,y)$.

## Solution

> [!success]- Independent derivation valid in every characteristic
> If $g(x,x)=0$ for all $x\in E$, the form is alternating and there is nothing further to prove. Otherwise choose $e\in E$ with $c=g(e,e)\ne0$, and put
>
> $$
> F=\{x\in E:g(e,x)=0\}.
> $$
>
> The hypothesis implies $g(x,e)=0$ for all $x\in F$. Every $z\in E$ has the decomposition
>
> $$
> z=\frac{g(e,z)}c e+\left(z-\frac{g(e,z)}c e\right),
> $$
>
> whose second term belongs to $F$. Also $ke\cap F=0$, since $g(e,ae)=ac$. Hence $E=ke\oplus F$, and the two summands are orthogonal in both orders.
>
> Let $x,y\in F$ and take $a=-g(x,y)/c$. Bilinearity and the vanishing mixed terms give
>
> $$
> g(e+x,ae+y)=ac+g(x,y)=0.
> $$
>
> Reciprocal vanishing now gives
>
> $$
> 0=g(ae+y,e+x)=ac+g(y,x),
> $$
>
> so $g(y,x)=g(x,y)$. Thus the restriction to $F$ is symmetric. On the one-dimensional summand $ke$, symmetry follows from $g(be,de)=bdc=g(de,be)$. The mixed terms vanish in both orders, so $g$ is symmetric on $E$.
>
> No division by $2$ has been used. The proof therefore includes characteristic $2$, where every alternating bilinear form is symmetric: expanding $g(x+y,x+y)=0$ gives $g(x,y)+g(y,x)=0$, and minus equals plus in characteristic $2$. The alternatives in the conclusion need not be disjoint.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Subspaces|Subspaces]]

## Notes

- **Source and proof status:** The statement was checked on [S2, Ch. XV, Ex. 16, printed p. 598, PDF p. 613]. The orthogonal-line argument is an independent proof.
- **Scope:** Neither finite dimensionality nor nondegeneracy is assumed or used. “Alternating” means $g(x,x)=0$ for every vector; replacing it by skew-symmetry without this diagonal condition would lose the characteristic-$2$ distinction.
