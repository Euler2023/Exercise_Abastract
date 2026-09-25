---
title: "Exercise F100: Residue Field of a Maximal Archimedean Subfield"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - ordered-fields
  - real-places
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XI, Exercise 6, printed p. 462, PDF p. 477"
created: 2026-09-25
---

# Exercise F100: Residue Field of a Maximal Archimedean Subfield

## Problem Statement

> [!question] Lang, Chapter XI, Exercise 6
> Let $K$ be an ordered real field and let $F$ be a subfield which is maximal archimedean in $K$. Show that the canonical place of $K$ with respect to $F$ is algebraic over $F$ (i.e. if $\mathfrak o$ is the valuation ring of elements of $K$ which are not infinitely large over $F$, and $\mathfrak m$ is its maximal ideal, then $\mathfrak o/\mathfrak m$ is algebraic over $F$).

## Hints

> [!hint]- Hint 1
> The natural map $F\to\mathfrak o/\mathfrak m$ is injective because no nonzero element of $F$ is infinitely small over $F$.

> [!hint]- Hint 2
> Suppose $x\in\mathfrak o$ has residue $\bar x$ transcendental over $F$. What happens to the residues of nonzero polynomials $g(x)$ with $g\in F[T]$?

> [!hint]- Hint 3
> Show that every element of the strictly larger field $F(x)$ lies in $\mathfrak o$. This contradicts the maximal Archimedean property of $F$.

## Solution

> [!success]- Independently derived solution
> The ordered-field construction of Chapter XI, §1 makes $\mathfrak o$ the ring of elements of $K$ that are not infinitely large over $F$, and $\mathfrak m$ the ideal of elements infinitely small over $F$. Its residue field $\mathfrak o/\mathfrak m$ contains an embedded copy of $F$: every $a\in F$ is in $\mathfrak o$, and a nonzero $a\in F$ is not in $\mathfrak m$ because $|a|$ is not smaller than every positive element of $F$.
>
> Assume that $\mathfrak o/\mathfrak m$ is not algebraic over $F$. Choose $x\in\mathfrak o$ whose residue $\bar x$ is transcendental over $F$. For every nonzero polynomial $g(T)\in F[T]$, its value $g(x)$ belongs to $\mathfrak o$ and has residue $g(\bar x)\ne0$. Therefore $g(x)\notin\mathfrak m$, so $g(x)$ is a unit of the local ring $\mathfrak o$ and $1/g(x)\in\mathfrak o$.
>
> Every element of $F(x)$ is a quotient $h(x)/g(x)$ with $h,g\in F[T]$ and $g\ne0$. The previous paragraph puts each such quotient in $\mathfrak o$. Thus no element of $F(x)$ is infinitely large over $F$, so $F(x)$ is Archimedean over $F$. Moreover $x\notin F$, since its residue is transcendental. This makes $F(x)$ a strictly larger subfield of $K$ Archimedean over $F$, contradicting that $F$ is maximal Archimedean in $K$. Hence $\mathfrak o/\mathfrak m$ is algebraic over $F$.

## Related Concepts

- [[03 - Field Theory/Concepts/Real Places and Archimedean Valuation Rings|Real Places and Archimedean Valuation Rings]]
- [[03 - Field Theory/Concepts/Ordered and Real Closed Fields|Ordered and Real Closed Fields]]
- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]

## Notes

- **Source status:** The complete statement and parenthetical definition were visually checked at [S2, Ch. XI, Ex. 6, printed p. 462, PDF p. 477]. The definitions of “maximal archimedean,” $\mathfrak o$, and $\mathfrak m$ are given at [S2, Ch. XI, §1, printed p. 450, PDF p. 465]. The proof above is independent.
- **Meaning of the conclusion:** “The canonical place is algebraic over $F$” refers to its residue field $\mathfrak o/\mathfrak m$; it does not assert that every element of $K$ is algebraic over $F$.
- **Source boundary:** The shared preamble to Exercises XI.5–XI.10 directs readers to the external paper [La 53] for solutions. No proof of this exercise is claimed to be in the textbook.
