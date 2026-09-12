---
title: "Exercise Gal114: Cyclic Group Cohomology H1"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - group-cohomology
  - cyclic-extensions
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 30, printed p. 325, PDF p. 340"
created: 2026-09-12
---

# Exercise Gal114: Cyclic Group Cohomology H1

## Problem Statement

> [!question]
> Let $A$ be an abelian group and let $G$ be a finite cyclic group operating on $A$ [by means of a homomorphism $G \to \operatorname{Aut}(A)$]. Let $\sigma$ be a generator of $G$. We define the trace $\operatorname{Tr}_G = \operatorname{Tr}$ on $A$ by
> $$
> \operatorname{Tr}(x) = \sum_{\tau \in G} \tau x.
> $$
> Let $A_{\operatorname{Tr}}$ denote the kernel of the trace, and let $(1 - \sigma)A$ denote the subgroup of $A$ consisting of all elements of type $y - \sigma y$. Show that
> $$
> H^1(G, A) \approx A_{\operatorname{Tr}} / (1 - \sigma)A.
> $$

## Hints

> [!hint]- Weak Hint
> Recall the definition of 1-cocycles and 1-coboundaries: a 1-cocycle is a map $f: G \to A$ satisfying $f(\tau \mu) = f(\tau) + \tau f(\mu)$, and a 1-coboundary is a map of the form $f(\tau) = \tau y - y$ for some $y \in A$. What happens when you evaluate $f$ on powers of the generator $\sigma$?

> [!hint]- Moderate Hint
> Use the cocycle condition to show by induction that for any $k \ge 1$,
> $$
> f(\sigma^k) = \sum_{j=0}^{k-1} \sigma^j f(\sigma).
> $$
> In particular, evaluate this at $k = n = |G|$.

> [!hint]- Strong Hint
> Since $\sigma^n = 1$ and $f(1) = 0$, $f(\sigma^n) = \operatorname{Tr}(f(\sigma)) = 0$, which implies $f(\sigma) \in A_{\operatorname{Tr}}$. Show that the map $f \mapsto f(\sigma)$ defines an isomorphism between the group of 1-cocycles $Z^1(G, A)$ and $A_{\operatorname{Tr}}$, and that the subgroup of 1-coboundaries $B^1(G, A)$ corresponds precisely to $(1 - \sigma)A$.

## Solution

> [!success]- Complete Derivation
> Let $n = |G|$, so that $G = \{1, \sigma, \sigma^2, \dots, \sigma^{n-1}\}$.
>
> ### 1. Cocycle Condition on Powers of $\sigma$
> A 1-cocycle (or crossed homomorphism) is a function $f: G \to A$ satisfying the relation
> $$
> f(\tau \mu) = f(\tau) + \tau f(\mu) \quad \text{for all } \tau, \mu \in G.
> $$
> Setting $\tau = \mu = 1$, we have $f(1) = f(1) + 1 \cdot f(1) = 2 f(1)$, which implies $f(1) = 0$.
>
> We claim by induction on $k \ge 1$ that
> $$
> f(\sigma^k) = \sum_{j=0}^{k-1} \sigma^j f(\sigma).
> $$
> - For $k = 1$, the sum is $\sigma^0 f(\sigma) = f(\sigma)$, which is true.
> - Assuming the claim holds for $k$, we compute:
>   $$
>   f(\sigma^{k+1}) = f(\sigma \cdot \sigma^k) = f(\sigma) + \sigma f(\sigma^k) = f(\sigma) + \sigma \sum_{j=0}^{k-1} \sigma^j f(\sigma) = f(\sigma) + \sum_{j=0}^{k-1} \sigma^{j+1} f(\sigma) = \sum_{j=0}^k \sigma^j f(\sigma).
>   $$
> This completes the induction.
>
> Setting $k = n$, since $\sigma^n = 1$, we obtain
> $$
> 0 = f(1) = f(\sigma^n) = \sum_{j=0}^{n-1} \sigma^j f(\sigma) = \operatorname{Tr}(f(\sigma)).
> $$
> Therefore, for every 1-cocycle $f \in Z^1(G, A)$, the element $a = f(\sigma)$ lies in $A_{\operatorname{Tr}} = \ker(\operatorname{Tr})$.
>
> ### 2. The Isomorphism $Z^1(G, A) \cong A_{\operatorname{Tr}}$
> Consider the evaluation homomorphism
> $$
> \Phi: Z^1(G, A) \to A_{\operatorname{Tr}}, \quad \Phi(f) = f(\sigma).
> $$
> - **Injectivity:** If $\Phi(f) = 0$, then $f(\sigma) = 0$. By the formula $f(\sigma^k) = \sum_{j=0}^{k-1} \sigma^j f(\sigma)$, we have $f(\sigma^k) = 0$ for all $0 \le k < n$. Hence $f \equiv 0$, and $\Phi$ is injective.
>
> - **Surjectivity:** Given any $a \in A_{\operatorname{Tr}}$, we define a function $f: G \to A$ by setting
>   $$
>   f(\sigma^k) = \sum_{j=0}^{k-1} \sigma^j a \quad \text{for } 0 \le k < n,
>   $$
>   with the convention that the empty sum for $k = 0$ is $0$.
>   We must check that $f$ satisfies the 1-cocycle condition $f(\sigma^k \sigma^m) = f(\sigma^k) + \sigma^k f(\sigma^m)$ for all $0 \le k, m < n$.
>   - Case 1: $k + m < n$. Then $\sigma^k \sigma^m = \sigma^{k+m}$, and
>     $$
>     f(\sigma^k \sigma^m) = \sum_{j=0}^{k+m-1} \sigma^j a = \sum_{j=0}^{k-1} \sigma^j a + \sigma^k \sum_{j=0}^{m-1} \sigma^j a = f(\sigma^k) + \sigma^k f(\sigma^m).
>     $$
>   - Case 2: $k + m \ge n$. Let $k + m = n + r$ where $0 \le r < n$. Then $\sigma^k \sigma^m = \sigma^{n+r} = \sigma^r$.
>     We compute:
>     $$
>     f(\sigma^k) + \sigma^k f(\sigma^m) = \sum_{j=0}^{k+m-1} \sigma^j a = \sum_{j=0}^{n-1} \sigma^j a + \sigma^n \sum_{j=0}^{r-1} \sigma^j a = \operatorname{Tr}(a) + 1 \cdot \sum_{j=0}^{r-1} \sigma^j a.
>     $$
>     Since $a \in A_{\operatorname{Tr}}$, $\operatorname{Tr}(a) = 0$. Therefore,
>     $$
>     f(\sigma^k) + \sigma^k f(\sigma^m) = 0 + f(\sigma^r) = f(\sigma^{k+m}) = f(\sigma^k \sigma^m).
>     $$
>   Thus $f \in Z^1(G, A)$, and $\Phi(f) = f(\sigma) = a$.
>
> Hence $\Phi$ is an isomorphism of abelian groups: $Z^1(G, A) \cong A_{\operatorname{Tr}}$.
>
> ### 3. Identification of 1-Coboundaries
> By definition, a 1-coboundary $f \in B^1(G, A)$ is a function of the form
> $$
> f(\tau) = \tau y - y \quad \text{for some } y \in A.
> $$
> Under the isomorphism $\Phi$, the image of $f$ is
> $$
> \Phi(f) = f(\sigma) = \sigma y - y = -(y - \sigma y).
> $$
> As $y$ ranges over $A$, the element $y - \sigma y$ ranges over the subgroup $(1 - \sigma)A$. Since $(1 - \sigma)A$ is a subgroup, it is closed under negation, so
> $$
> \Phi(B^1(G, A)) = (1 - \sigma)A.
> $$
>
> ### 4. Conclusion
> The group isomorphism $\Phi: Z^1(G, A) \to A_{\operatorname{Tr}}$ maps the subgroup $B^1(G, A)$ isomorphically onto $(1 - \sigma)A$. Passing to the quotient yields an isomorphism
> $$
> H^1(G, A) = Z^1(G, A) / B^1(G, A) \approx A_{\operatorname{Tr}} / (1 - \sigma)A.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclic Extensions|Cyclic Extensions]]
- [[05 - Galois Theory/Concepts/Hilbert's Theorem 90|Hilbert's Theorem 90]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]

## Notes

- When $K/k$ is a cyclic Galois extension and $A = K^\times$ (multiplicative notation), Hilbert's Theorem 90 asserts that $H^1(G, K^\times) = 0$, which translates to $A_{\operatorname{Norm}} = (1 - \sigma)K^\times$, i.e., an element of norm 1 is of the form $\beta / \sigma \beta$.
- When $A = K$ under addition, the additive Hilbert's Theorem 90 states that $H^1(G, K) = 0$, meaning every element of trace 0 can be written as $\beta - \sigma \beta$.
