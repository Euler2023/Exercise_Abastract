---
title: "Exercise ST7: Finite Alphabet Sequences and the Continuum"
topic: set-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - set-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Appendix 2, Exercise 11, printed p. 893, PDF p. 908"
created: 2026-09-29
---

# Exercise ST7: Finite Alphabet Sequences and the Continuum

## Problem Statement

> [!question] Lang, Appendix 2, Exercise 11
> Let $J_n$ be the set of integers $\{1,\ldots,n\}$. Let $\mathbb Z^+$ be the set of positive integers. Show that the following sets have the same cardinality:
>
> (a) The set of all maps $M(\mathbb Z^+,J_n)$.
>
> (b) The set of all maps $M(\mathbb Z^+,J_2)$.
>
> (c) The set of all real numbers $x$ such that $0\le x<1$.
>
> (d) The set of all real numbers.

> [!warning] Source issue
> The printed problem gives no restriction $n\ge2$. For $n=1$, (a) is a singleton and cannot have the cardinality of (b)–(d). The proved version assumes an integer $n\ge2$; the printed statement is retained above.

## Hints

> [!hint]- Hint 1: Encode a finite alphabet in blocks
> For $n\ge2$, binary sequences inject into $n$-letter sequences, and fixed-length binary blocks encode the $n$ letters.

> [!hint]- Hint 2: Avoid ambiguous positional expansions
> Inject binary sequences into the interval by ternary digits $0,2$, followed by a scaling. Inject real numbers into binary sequences by their cuts in an enumeration of the rationals.

## Solution

> [!success]- Complete independent derivation
> Assume the corrected hypothesis $n\ge2$. Relabel $J_2$ as $\{0,1\}$ and write $B=\{0,1\}^{\mathbb Z^+}$.
>
> Choose distinct binary words of a common length $k$ for the $n$ letters, with $2^k\ge n$. Concatenation gives an injection $J_n^{\mathbb Z^+}\to B$, since fixed-length blocks can be uniquely decoded. Choosing two distinct letters gives an injection $B\to J_n^{\mathbb Z^+}$. Schroeder–Bernstein proves equality of (a) and (b).
>
> Define
>
> $$
> T:B\to[0,1),\qquad T(b)=\frac12\sum_{j=1}^{\infty}\frac{2b_j}{3^j}.
> $$
>
> The series is between $0$ and $1/2$, so it lands in the stated interval. If two sequences first differ at index $k$, the leading difference before scaling is $2/3^k$, while the sum of all later absolute differences is at most $1/3^k$. Their values are therefore distinct. This proves injectivity without choosing potentially ambiguous binary expansions of real numbers.
>
> Enumerate $\mathbb Q=\{q_1,q_2,\ldots\}$ and associate to $x\in\mathbb R$ the sequence $c(x)$ with $c_j(x)=1$ if $q_j<x$ and $0$ otherwise. If $x<y$, density of $\mathbb Q$ supplies $q_j$ with $x<q_j<y$, so the sequences differ. Thus $\mathbb R\to B$ is injective. Together with the interval inclusion we have
>
> $$
> B\hookrightarrow[0,1)\hookrightarrow\mathbb R\hookrightarrow B.
> $$
>
> Schroeder–Bernstein gives equality of all three cardinalities, and therefore of (a)–(d). The elementary real-number inputs are that the rationals are denumerable and dense, and that an absolutely convergent geometric series has the displayed sum bounds.
>
> For $n=1$, there is only one sequence in (a), whereas (b) contains at least two. Thus the original statement without the correction is false.

## Related Concepts

- [[10 - Set Theory and Foundations/Concepts/Cardinality and Cardinal Arithmetic]]

## Notes

All four sets, including the endpoint $0\le x<1$, were visually checked at printed p. 893 / PDF p. 908. The proof is independent. It imports only elementary rational density, countability, and convergent real geometric series; it does not assume the value of the continuum in advance.
