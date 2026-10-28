---
title: "Exercise LA613: Endomorphism Rings of Free Integer Modules"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.5, Exercise 6.5.1, printed p. 243, PDF p. 257"
source_refs:
  - "S7/ch-6/sec-5/ex-1"
created: 2026-10-28
---

# Exercise LA613: Endomorphism Rings of Free Integer Modules

## Problem Statement

> [!question] Original Exercise 6.5.1
> Let $M$ be a free $\mathbb Z$-module of rank $r$. Show that the ring of endomorphisms of $M$ is a free $\mathbb Z$-module of rank $r^2$, and so any subring is a free $\mathbb Z$-module of finite rank.

## Hints

> [!hint]- Hint 1
> Choose a basis of $M$ and write an endomorphism as an integer matrix. The matrix units give $r^2$ basis elements.

> [!hint]- Hint 2
> An additive subgroup of $\mathbb Z^n$ is free of rank at most $n$. Prove this by induction using projection to one coordinate.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Choose an ordered basis $e_1,\ldots,e_r$ of $M$. An endomorphism is determined by the integer coordinates of the $r$ images of the basis vectors, giving an isomorphism of rings
> $$
> \operatorname{End}_{\mathbb Z}(M)\simeq M_r(\mathbb Z).
> $$
> As an additive $\mathbb Z$-module the latter has basis $E_{ij}$, $1\le i,j\le r$, since a matrix is uniquely $\sum_{i,j}a_{ij}E_{ij}$. Its rank is $r^2$.
>
> For completeness, let $H\subseteq\mathbb Z^n$ be any additive subgroup. Induct on $n$. For $n=0$ the result is immediate. Project onto the last coordinate. The image is either zero or $m\mathbb Z$ for some $m>0$. The kernel is a subgroup of $\mathbb Z^{n-1}$, so is free of rank at most $n-1$ by induction. If the image is zero, this proves the result. Otherwise choose $v\in H$ with last coordinate $m$. Every $h\in H$ has last coordinate $km$ and uniquely decomposes as
> $$
> h=(h-kv)+kv,\qquad h-kv\in\ker,\quad kv\in\mathbb Z v.
> $$
> The two summands intersect only in zero, so $H=\ker\oplus\mathbb Zv$ is free of rank at most $n$. Applying this to the additive group of a subring of $M_r(\mathbb Z)\simeq\mathbb Z^{r^2}$ proves it is free of finite rank at most $r^2$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Boundary:** A subring need not have rank $r^2$; the assertion is a finite rank bound. The argument applies whether or not the subring is required to contain the identity.
- **Routing:** Free modules, matrix coordinates and subgroup bases are the main tools.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
