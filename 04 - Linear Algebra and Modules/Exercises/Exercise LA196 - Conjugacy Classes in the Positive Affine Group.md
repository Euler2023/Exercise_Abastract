---
title: "Exercise LA196: Conjugacy Classes in the Positive Affine Group"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-groups
  - conjugacy-classes
  - affine-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, Ex. 2.5, printed p. 221, PDF p. 233"
figures:
  - "[[Attachments/artin-algebra-2e-ch07-ex-2.5-conjugacy-classes.png]]"
created: 2026-08-24
---

# Exercise LA196: Conjugacy Classes in the Positive Affine Group

## Problem Statement

> [!question] Exercise 2.5
> Let $G$ be the group of matrices of the form
>
> $$
> \begin{pmatrix}x&y\\0&1\end{pmatrix},
> \qquad x,y\in\mathbb R,\quad x>0.
> $$
>
> Determine the conjugacy classes in $G$, and sketch them in the $(x,y)$-plane.

## Hints

> [!hint]- Hint 1
> Identify the matrix with the pair $(x,y)$ and compute $(a,b)(x,y)(a,b)^{-1}$.

> [!hint]- Hint 2
> The first coordinate is invariant. Treat $x\ne1$ and $x=1$ separately.

## Solution

> [!success]- Solution
> The multiplication and inverse laws are
>
> $$
> (x,y)(u,v)=(xu,xv+y),\qquad
> (a,b)^{-1}=\left(a^{-1},-a^{-1}b\right).
> $$
>
> Hence
>
> $$
> (a,b)(x,y)(a,b)^{-1}
> =\bigl(x,\ ay+(1-x)b\bigr),\qquad a>0.
> $$
>
> The coordinate $x$ is therefore constant on every conjugacy class.
>
> If $x\ne1$, the parameter $b$ makes $ay+(1-x)b$ arbitrary, so the class of $(x,y)$ is the entire vertical line
>
> $$
> \{(x,t):t\in\mathbb R\}.
> $$
>
> If $x=1$, conjugation sends $y$ to $ay$ with $a>0$. Thus $(1,0)$ is the identity class, all $(1,y)$ with $y>0$ form one class, and all $(1,y)$ with $y<0$ form another. These are precisely the classes shown below.

## Conjugacy-Class Sketch

![[Attachments/artin-algebra-2e-ch07-ex-2.5-conjugacy-classes.png]]

*New TikZ construction from the conjugation formula above. The editable source is [[Attachments/artin-algebra-2e-ch07-ex-2.5-conjugacy-classes.tex]], with vector output [[Attachments/artin-algebra-2e-ch07-ex-2.5-conjugacy-classes.pdf]].*

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- The drawing is a derived mathematical construction, not a crop or redraw from Artin.
- **Source status:** The matrix family and sketch request are from [S1, Ch. 7, §2, Ex. 2.5, printed p. 221, PDF p. 233]. The classification and figure are independent derivations.

