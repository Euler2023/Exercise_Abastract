---
title: "Exercise R283: A Primary Ideal Contains a Power of Its Radical"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - primary-ideals
  - noetherian-rings
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, Exercise 4, printed p. 443, PDF p. 458"
created: 2026-09-22
---

# Exercise R283: A Primary Ideal Contains a Power of Its Radical

## Problem Statement

> [!question] Lang, Chapter X, Exercise 4
> Let $A$ be Noetherian, and let $\mathfrak q$ be a $\mathfrak p$-primary ideal. Show that there exists some $n\ge1$ such that $\mathfrak p^n\subset\mathfrak q$.

## Hints

> [!hint]- Hint 1
> The prime belonging to a primary ideal is its radical, so each element of $\mathfrak p$ has a power in $\mathfrak q$.

> [!hint]- Hint 2
> Choose finitely many generators $p_1,\ldots,p_t$ of $\mathfrak p$. If $p_i^{e_i}\in\mathfrak q$, every product of $1+\sum_i(e_i-1)$ generators belongs to $\mathfrak q$.

## Solution

> [!success]- Independently derived solution
> Because $\mathfrak q$ is $\mathfrak p$-primary,
>
> $$
> \mathfrak p=\sqrt{\mathfrak q}
> =\{x\in A:x^e\in\mathfrak q\text{ for some }e\ge1\}.
> $$
>
> The Noetherian hypothesis ensures that $\mathfrak p$ is finitely generated. If $\mathfrak p=0$, choose $n=1$. Otherwise write $\mathfrak p=(p_1,\ldots,p_t)$ and choose $e_i\ge1$ with $p_i^{e_i}\in\mathfrak q$.
>
> Put $n=1+\sum_i(e_i-1)$. Every generator $p_1^{d_1}\cdots p_t^{d_t}$ of $\mathfrak p^n$, with $\sum_i d_i=n$, has $d_i\ge e_i$ for at least one $i$. It is then a multiple of an element of $\mathfrak q$, hence lies in $\mathfrak q$. Thus $\mathfrak p^n\subseteq\mathfrak q$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Primary Ideals and Primary Decomposition|Primary Ideals and Primary Decomposition]]
- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules|Noetherian Modules]]
- [[02 - Ring Theory/Exercises/Exercise R282 - A Uniform Power in the Primary Ideal Product Criterion|Exercise R282]]

## Notes

- **Source status:** The complete statement was visually checked at [S2, Ch. X, Ex. 4, printed p. 443, PDF p. 458]. The proof is independent.
- **A stronger boundary:** For this conclusion, primaryness is unnecessary once $\mathfrak p=\sqrt{\mathfrak q}$ and $\mathfrak p$ is finitely generated. More generally, a finitely generated ideal contained in the radical of any ideal has a power contained in that ideal.
