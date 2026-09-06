---
title: "Exercise F71: A Tower of Normal Extensions with Nonnormal Composite"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 10, printed p. 253, PDF p. 268"
created: 2026-09-06
---

# Exercise F71: A Tower of Normal Extensions with Nonnormal Composite

## Problem Statement

> [!question] Lang, Chapter V, Exercise 10
> Let $\alpha$ be a real number such that $\alpha^4=5$.
>
> (a) Show that $\mathbb Q(i\alpha^2)$ is normal over $\mathbb Q$.
>
> (b) Show that $\mathbb Q(\alpha+i\alpha)$ is normal over $\mathbb Q(i\alpha^2)$.
>
> (c) Show that $\mathbb Q(\alpha+i\alpha)$ is not normal over $\mathbb Q$.

## Hints

> [!hint]- Hint 1
> Put $\beta=(1+i)\alpha$ and compute $\beta^2,\beta^4$.

> [!hint]- Hint 2
> If the quartic field were normal, it would contain both $\beta$ and $i\beta$.

## Solution

> [!success]- Solution and proof status
> Put $\delta=i\alpha^2$, $M=\mathbb Q(\delta)$, and $E=\mathbb Q(\beta)$ with $\beta=(1+i)\alpha$. Then
> $$
> \delta^2=-5,\qquad\beta^2=2\delta,\qquad\beta^4=-20.
> $$
>
> **(a)** $M$ is the splitting field of $X^2+5$, whose roots are $\pm\delta$, so $M/\mathbb Q$ is normal.
>
> **(b)** The relation $\delta=\beta^2/2$ gives $M\subseteq E$. The polynomial $X^4+20$ is Eisenstein at $5$, so $[E:\mathbb Q]=4$ and $[E:M]=2$. Over $M$, the field $E$ is the splitting field of $X^2-2\delta$, with roots $\pm\beta$. Thus $E/M$ is normal.
>
> **(c)** If $E/\mathbb Q$ were normal, the irreducible polynomial $X^4+20$ would split in $E$, so $i\beta\in E$. Then $i=(i\beta)/\beta\in E$ and $\alpha=\beta/(1+i)\in E$. But $X^4-5$ is Eisenstein at $5$, and $\mathbb Q(\alpha)\subset\mathbb R$ has degree four. Adjoining $i$ doubles its degree. Hence $E$ would contain the degree-eight field $\mathbb Q(\alpha,i)$, contradicting $[E:\mathbb Q]=4$.

## Related Concepts

- [[03 - Field Theory/Concepts/Normal Extensions|Normal Extensions]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]

## Notes

- **Imported irreducibility criterion:** For an integer polynomial, if a prime divides every nonleading coefficient, does not divide the leading coefficient, and its square does not divide the constant coefficient, Eisenstein’s criterion gives irreducibility over the rationals [S2, Ch. IV, Thm. 3.1, printed pp. 183–184, PDF pp. 198–199]. All primes and shifts used above are specified explicitly.

- **Method boundary:** Normality is not transitive in a tower, even though each extension here is separable. The proof uses the splitting-field characterization [S2, Ch. V, Thm. 3.3, printed p. 237, PDF p. 252].

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 10, printed p. 253, PDF p. 268]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
