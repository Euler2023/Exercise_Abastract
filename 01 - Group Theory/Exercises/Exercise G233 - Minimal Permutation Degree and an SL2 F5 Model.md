---
title: "Exercise G233: Minimal Permutation Degree and an SL2 F5 Model"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 8, Ex. 8.2, printed p. 224, PDF p. 236"
created: 2026-08-27
---

# Exercise G233: Minimal Permutation Degree and an SL2 F5 Model

## Problem Statement

> [!question] Exercise 8.2
> For $G=\langle x,y:x^4=1, y^3=1, xy=y^2x\rangle$: **(a)** find the smallest $n$ with $G\hookrightarrow S_n$; **(b)** find a subgroup of $SL_2(\mathbb F_5)$ isomorphic to $G$.

## Hints

> [!hint]- Hint 1
> Combine the coset actions on $G/\langle x\rangle$ and $G/\langle y\rangle$.

## Solution

> [!success]- Solution
> The degree-$3$ coset action on $\langle x\rangle$ has kernel $\langle x^2\rangle$, while the degree-$4$ action on $\langle y\rangle$ has kernel $\langle y\rangle$. Their product is faithful, so $G\hookrightarrow S_7$. No faithful action of degree at most $6$ exists: every degree-$3$ constituent retains the central $\langle x^2\rangle$, the degree-$4$ constituent retains $\langle y\rangle$, and the only possible sums of smaller transitive constituents have nontrivial kernel. Thus $n=7$.
>
> In $SL_2(\mathbb F_5)$ take
>
> $$
> x=\begin{pmatrix}0&1\\-1&0\end{pmatrix},\qquad y=\begin{pmatrix}0&2\\2&4\end{pmatrix}.
> $$
>
> Direct multiplication gives $x^4=y^3=I$ and $xyx^{-1}=y^{-1}=y^2$. The subgroups $\langle x\rangle$ and $\langle y\rangle$ have orders $4,3$ and trivial intersection, so they generate $12$ elements and give the required copy of $G$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[01 - Group Theory/Concepts/Group Actions|Semidirect-product actions]]
- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes and the Class Equation]]

## Notes

- **Source status:** [S1, Ch. 7, §8, Ex. 8.2, printed p. 224, PDF p. 236]; source PDF checked; solution independently derived.
