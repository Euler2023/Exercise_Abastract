---
title: "Exercise Gal93: Prime-Degree Separable Extensions with Two Conjugates"
topic: galois-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - galois-theory
  - field-automorphisms
  - cyclic-extensions
  - separable-extensions
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 9, printed p. 322, PDF p. 337"
created: 2026-09-12
---

# Exercise Gal93: Prime-Degree Separable Extensions with Two Conjugates

## Problem Statement

> [!question] Exercise VI.9
> Let $K$ be a finite separable extension of a field $k$, of prime degree $p$. Let $\theta \in K$ be such that $K = k(\theta)$, and let $\theta_1, \dots, \theta_p$ be the conjugates of $\theta$ over $k$ in some algebraic closure. Let $\theta = \theta_1$. If $\theta_2 \in k(\theta)$, show that $K$ is Galois and in fact cyclic over $k$.

## Hints

> [!hint]- Hint 1: Equality of Conjugate Fields
> Since $\theta_2$ is a conjugate of $\theta_1$ over $k$, the subfield $k(\theta_2)$ is $k$-isomorphic to $k(\theta_1)$ and has degree $p$ over $k$. What does $\theta_2 \in k(\theta_1)$ imply about the relationship between $k(\theta_1)$ and $k(\theta_2)$?

> [!hint]- Hint 2: Automorphisms of $K$
> Construct a non-identity $k$-embedding $\sigma: K \to \overline{k}$ sending $\theta_1 \mapsto \theta_2$. Show that $\sigma$ maps $K$ into itself, and use the fact that the order of $\operatorname{Aut}_k(K)$ divides $[K:k] = p$.

## Solution

> [!success]- Solution
>
> Let $f(X) \in k[X]$ be the minimal polynomial of $\theta = \theta_1$ over $k$. Since $[K:k] = p$, $f(X)$ is an irreducible polynomial of degree $p$. The conjugates $\theta_1, \dots, \theta_p$ in an algebraic closure $\overline{k}$ are the $p$ distinct roots of $f(X)$ (distinct because $K/k$ is separable).
>
> 1. **Equality of the Conjugate Fields:**
>    Each conjugate $\theta_i$ has minimal polynomial $f(X)$ over $k$, so
>    $$
>    [k(\theta_i) : k] = \deg f = p.
>    $$
>    By hypothesis, $\theta_2 \in k(\theta_1) = K$. Therefore,
>    $$
>    k(\theta_2) \subseteq k(\theta_1).
>    $$
>    Since both $k(\theta_2)$ and $k(\theta_1)$ are $k$-vector spaces of the same finite dimension $p$, this inclusion forces equality:
>    $$
>    k(\theta_2) = k(\theta_1) = K.
>    $$
>
> 2. **Constructing a Non-Trivial Automorphism:**
>    Because $\theta_1$ and $\theta_2$ are roots of the same irreducible polynomial $f(X)$ over $k$, there exists a unique $k$-isomorphism of fields
>    $$
>    \sigma: k(\theta_1) \longrightarrow k(\theta_2)
>    $$
>    such that $\sigma(\theta_1) = \theta_2$.
>    Since $k(\theta_2) = k(\theta_1) = K$, $\sigma$ is an endomorphism of $K$ over $k$, hence a $k$-automorphism of $K$:
>    $$
>    \sigma \in \operatorname{Aut}_k(K).
>    $$
>    Because the roots of $f(X)$ are pairwise distinct and $p \ge 2$, we have $\theta_2 \neq \theta_1$, which means
>    $$
>    \sigma \neq \operatorname{id}_K.
>    $$
>
> 3. **$K/k$ is Galois and Cyclic:**
>    The group of $k$-automorphisms $\operatorname{Aut}_k(K)$ of a finite field extension $K/k$ has order dividing the extension degree:
>    $$
>    |\operatorname{Aut}_k(K)| \le [K:k] = p.
>    $$
>    Moreover, the cyclic subgroup $\langle \sigma \rangle \le \operatorname{Aut}_k(K)$ has order $d > 1$. By Lagrange's theorem, $d$ divides $|\operatorname{Aut}_k(K)|$, which in turn divides $p$.
>    Since $p$ is a prime number, the only divisor of $p$ strictly greater than 1 is $p$ itself.
>    Thus,
>    $$
>    |\langle \sigma \rangle| = |\operatorname{Aut}_k(K)| = [K:k] = p.
>    $$
>    An extension $K/k$ satisfying $|\operatorname{Aut}_k(K)| = [K:k]$ is, by definition, a Galois extension. Furthermore, since its Galois group has prime order $p$, it is cyclic:
>    $$
>    \operatorname{Gal}(K/k) = \langle \sigma \rangle \cong C_p \cong \mathbb Z/p\mathbb Z.
>    $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[05 - Galois Theory/Concepts/Automorphisms|Automorphisms]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]

## Notes

- **Routing:** Galois Theory is primary because the result characterizes Galois extensions of prime degree through root-adjoining and automorphism group orders.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 9, printed p. 322, PDF p. 337.
