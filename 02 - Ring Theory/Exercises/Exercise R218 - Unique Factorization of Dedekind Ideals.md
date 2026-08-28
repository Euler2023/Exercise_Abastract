---
title: "Exercise R218: Unique Factorization of Dedekind Ideals"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - dedekind-rings
  - prime-ideals
  - ideal-factorization
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Rings, Exercise 14, printed p. 116, PDF p. 131"
created: 2026-08-28
---

# Exercise R218: Unique Factorization of Dedekind Ideals

## Problem Statement

> [!question] Exercise 14
> Let $\mathfrak o$ be a Dedekind ring. Prove that every nonzero ideal has a factorization as a product of prime ideals, uniquely determined up to permutation.

## Hints

> [!hint]- Hint 1
> By Exercise II.13, ideals satisfy the ascending-chain condition. If $\mathfrak a\subseteq\mathfrak p$ with $\mathfrak p$ maximal, compare $\mathfrak a$ with $\mathfrak p^{-1}\mathfrak a$.

> [!hint]- Hint 2
> For uniqueness, first show that two comparable nonzero prime ideals must be equal.

## Solution

> [!success]- Solution
> **Existence.** Exercise II.13 shows that $\mathfrak o$ is Noetherian. Suppose there is a proper nonzero ideal having no prime-ideal factorization, and choose one, $\mathfrak a$, maximal under inclusion. Choose a maximal ideal $\mathfrak p$ containing $\mathfrak a$. It is nonzero because $\mathfrak a\ne(0)$, and it is prime.
>
> Since $\mathfrak a\subseteq\mathfrak p$,
>
> $$
> \mathfrak b=\mathfrak p^{-1}\mathfrak a
> $$
>
> is an integral ideal: multiplication by $\mathfrak p^{-1}$ gives $\mathfrak b\subseteq\mathfrak p^{-1}\mathfrak p=\mathfrak o$. Also $\mathfrak a\subseteq\mathfrak b$ because $\mathfrak o\subseteq\mathfrak p^{-1}$. The inclusion is strict. Otherwise $\mathfrak p^{-1}\mathfrak a=\mathfrak a$, and cancellation by the invertible ideal $\mathfrak a$ would give $\mathfrak p^{-1}=\mathfrak o$, hence $\mathfrak p=\mathfrak o$, a contradiction.
>
> By maximality of the counterexample, $\mathfrak b$ has a prime factorization. Since
>
> $$
> \mathfrak a=\mathfrak p\mathfrak b,
> $$
>
> this gives a prime factorization of $\mathfrak a$, a contradiction. Thus every nonzero ideal factors into primes.
>
> **A comparison lemma.** If $\mathfrak p\subsetneq\mathfrak q$ are nonzero prime ideals, put
>
> $$
> \mathfrak c=\mathfrak p\mathfrak q^{-1}.
> $$
>
> Then $\mathfrak c\subseteq\mathfrak o$ and $\mathfrak p=\mathfrak q\mathfrak c$. Since $\mathfrak p$ is prime and $\mathfrak q\nsubseteq\mathfrak p$, it follows that $\mathfrak c\subseteq\mathfrak p$. Hence
>
> $$
> \mathfrak p=\mathfrak q\mathfrak c
> \subseteq\mathfrak q\mathfrak p
> \subseteq\mathfrak p.
> $$
>
> Equality throughout gives $\mathfrak q\mathfrak p=\mathfrak p$; cancelling $\mathfrak p$ yields $\mathfrak q=\mathfrak o$, contrary to primeness. Therefore comparable nonzero prime ideals are equal.
>
> **Uniqueness.** Suppose
>
> $$
> \mathfrak p_1\cdots\mathfrak p_r
> =\mathfrak q_1\cdots\mathfrak q_s.
> $$
>
> The left product is contained in $\mathfrak q_1$. Since $\mathfrak q_1$ is prime, some $\mathfrak p_i$ is contained in $\mathfrak q_1$. The comparison lemma gives $\mathfrak p_i=\mathfrak q_1$. Reorder the $\mathfrak p_i$ and cancel this invertible ideal. Repeating proves $r=s$ and equality of all factors after a permutation.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Proof dependency:** The existence proof uses finite generation from II.13; uniqueness uses invertibility of every nonzero fractional ideal, which is Lang's defining Dedekind hypothesis.
- **Terminology boundary:** This is unique factorization of nonzero ideals, not necessarily unique factorization of elements.
- **Source status:** The statement was visually checked at [S2, Ch. II, Ex. 14, printed p. 116, PDF p. 131]. Lang points from §1 to this exercise for ideal factorization; the complete proof here is independent.

