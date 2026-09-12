---
title: "Exercise Gal133: Hilbert Theorem 90 for Truncated Witt Vectors"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - witt-vectors
  - hilberts-theorem-90
  - group-cohomology
  - characteristic-p
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 49, printed p. 331, PDF p. 346"
created: 2026-09-12
---

# Exercise Gal133: Hilbert Theorem 90 for Truncated Witt Vectors

## Problem Statement

> [!question]
> Let $n$ be an integer $\ge 1$ and $p$ a prime number again. Let $k$ be a field of characteristic $p$. Let $W_n(k)$ be the ring of truncated Witt vectors $(x_0, \dots, x_{n-1})$ with components in $k$. We view $W_n(k)$ as an additive group. If $x \in W_n(k)$, define $\wp(x) = Fx - x$. Then $\wp$ is a homomorphism. If $K$ is a Galois extension of $k$, and $\sigma \in G(K/k)$, and $x \in W_n(K)$ we can define $\sigma x$ to have component $(\sigma x_0, \dots, \sigma x_{n-1})$. Prove the analogue of Hilbert's Theorem 90 for Witt vectors, and prove that the first cohomology group is trivial. (One takes a vector whose trace is not 0, and finds a coboundary the same way as in the proof of Theorem 10.1).

## Hints

> [!hint]- Weak Hint
> Follow the proof of the additive Hilbert's Theorem 90 (Lang, Ch. VI, §10, Theorem 10.1): for an additive 1-cocycle $\{\alpha_\sigma\}_{\sigma \in G}$ with values in $W_n(K)$, form an average $\sum_{\tau \in G} \alpha_\tau \cdot \tau(\beta)$ for some well-chosen $\beta \in W_n(K)$.

> [!hint]- Moderate Hint
> - The trace map $\operatorname{Tr}: W_n(K) \to W_n(k)$ is defined by $\operatorname{Tr}(y) = \sum_{\tau \in G} \tau y$.
> - Since $K/k$ is separable, the field trace $\operatorname{Tr}_{K/k}: K \to k$ is surjective. Choose $b \in K$ such that $\operatorname{Tr}_{K/k}(b) = 1$, and let $\theta = (b, 0, \dots, 0) \in W_n(K)$.
> - Check that $\operatorname{Tr}(\theta)$ is a unit in $W_n(k)$ by Exercise 48.

> [!hint]- Strong Hint
> Let $u = \operatorname{Tr}(\theta)^{-1} \in W_n(k)$ and set $\beta = u \theta \in W_n(K)$, so that $\operatorname{Tr}(\beta) = 1_{W_n(K)}$.
> Define $\gamma = \sum_{\tau \in G} \alpha_\tau \cdot \tau(\beta) \in W_n(K)$.
> Compute $\sigma(\gamma) - \gamma$ using the cocycle relation $\alpha_{\sigma \tau} = \alpha_\sigma + \sigma \alpha_\tau$ to show that $\alpha_\sigma = \gamma - \sigma(\gamma)$.

## Solution

> [!success]- Complete Derivation
> Let $K/k$ be a finite Galois extension with Galois group $G = \operatorname{Gal}(K/k)$, and let $W_n(K)$ be the additive group of truncated Witt vectors of length $n$ with entries in $K$.
>
> ---
>
> ### 1. Galois Action and 1-Cocycles on $W_n(K)$
> For each $\sigma \in G$ and $x = (x_0, \dots, x_{n-1}) \in W_n(K)$, the action
> $$
> \sigma x = (\sigma x_0, \dots, \sigma x_{n-1})
> $$
> defines an automorphism of $W_n(K)$ as a ring (and hence as an additive group), because the universal addition and multiplication polynomials have coefficients in $\mathbf{Z} \subseteq k$, and $\sigma$ fixes $k$ pointwise.
>
> A 1-cocycle (crossed homomorphism) is a family $\{\alpha_\sigma\}_{\sigma \in G}$ of elements in $W_n(K)$ satisfying the additive cocycle identity:
> $$
> \alpha_{\sigma \tau} = \alpha_\sigma + \sigma \alpha_\tau \quad \text{for all } \sigma, \tau \in G.
> $$
> A 1-coboundary is a family of the form
> $$
> \alpha_\sigma = \gamma - \sigma \gamma \quad \text{for some fixed } \gamma \in W_n(K).
> $$
> We must prove that every 1-cocycle is a 1-coboundary, so that
> $$
> H^1(G, W_n(K)) = 0.
> $$
>
> ---
>
> ### 2. Existence of a Vector of Trace 1
> Define the trace map on $W_n(K)$ by:
> $$
> \operatorname{Tr}: W_n(K) \longrightarrow W_n(k), \quad \operatorname{Tr}(y) = \sum_{\tau \in G} \tau y.
> $$
> For each $\sigma \in G$, $\sigma(\operatorname{Tr}(y)) = \sum_{\tau \in G} \sigma \tau y = \operatorname{Tr}(y)$, so $\operatorname{Tr}(y) \in W_n(k)$.
>
> Since $K/k$ is a finite separable extension, the field trace $\operatorname{Tr}_{K/k}: K \to k$ is not identically zero (by linear independence of characters).
> Therefore, there exists an element $b \in K$ such that
> $$
> \operatorname{Tr}_{K/k}(b) = 1 \in k.
> $$
> Consider the Witt vector $\theta = (b, 0, \dots, 0) \in W_n(K)$.
> We compute the 0-th component of its trace:
> $$
> (\operatorname{Tr}(\theta))_0 = \left( \sum_{\tau \in G} \tau \theta \right)_0 = \sum_{\tau \in G} (\tau \theta)_0 = \sum_{\tau \in G} \tau(b) = \operatorname{Tr}_{K/k}(b) = 1.
> $$
> Let $t = \operatorname{Tr}(\theta) \in W_n(k)$.
> Its 0-th component is $t_0 = 1 \ne 0$.
> By Exercise 48 (adapted to truncated Witt vectors $W_n(k)$), any Witt vector whose 0-th component is non-zero is an invertible element (a **unit**) in the ring $W_n(k)$.
>
> Let $t^{-1} \in W_n(k)$ be its multiplicative inverse, and define:
> $$
> \beta = t^{-1} \cdot \theta \in W_n(K).
> $$
> Since $t^{-1} \in W_n(k)$, it is invariant under all $\tau \in G$.
> By the linearity of the trace over $W_n(k)$:
> $$
> \operatorname{Tr}(\beta) = \operatorname{Tr}(t^{-1} \theta) = t^{-1} \operatorname{Tr}(\theta) = t^{-1} t = 1_{W_n(K)}.
> $$
> That is:
> $$
> \sum_{\tau \in G} \tau(\beta) = 1_{W_n(K)}.
> $$
>
> ---
>
> ### 3. Construction of the Coboundary Element $\gamma$
> Given the 1-cocycle $\{\alpha_\sigma\}_{\sigma \in G}$, define the element $\gamma \in W_n(K)$ by:
> $$
> \gamma = \sum_{\tau \in G} \alpha_\tau \cdot \tau(\beta).
> $$
> We compute $\sigma(\gamma)$ for any $\sigma \in G$:
> $$
> \sigma(\gamma) = \sigma\left( \sum_{\tau \in G} \alpha_\tau \cdot \tau(\beta) \right) = \sum_{\tau \in G} \sigma(\alpha_\tau) \cdot \sigma \tau(\beta).
> $$
> From the cocycle condition $\alpha_{\sigma \tau} = \alpha_\sigma + \sigma \alpha_\tau$, we have:
> $$
> \sigma(\alpha_\tau) = \alpha_{\sigma \tau} - \alpha_\sigma.
> $$
> Substituting this into the sum:
> $$
> \sigma(\gamma) = \sum_{\tau \in G} (\alpha_{\sigma \tau} - \alpha_\sigma) \cdot \sigma \tau(\beta) = \sum_{\tau \in G} \alpha_{\sigma \tau} \cdot \sigma \tau(\beta) - \sum_{\tau \in G} \alpha_\sigma \cdot \sigma \tau(\beta).
> $$
> In the first sum, as $\tau$ runs through $G$, the product $\mu = \sigma \tau$ also runs through $G$.
> Therefore:
> $$
> \sum_{\tau \in G} \alpha_{\sigma \tau} \cdot \sigma \tau(\beta) = \sum_{\mu \in G} \alpha_\mu \cdot \mu(\beta) = \gamma.
> $$
> In the second sum, $\alpha_\sigma$ does not depend on $\tau$, so we factor it out:
> $$
> \sum_{\tau \in G} \alpha_\sigma \cdot \sigma \tau(\beta) = \alpha_\sigma \cdot \sum_{\tau \in G} \sigma \tau(\beta) = \alpha_\sigma \cdot \operatorname{Tr}(\beta).
> $$
> Since $\operatorname{Tr}(\beta) = 1_{W_n(K)}$, this second term is simply $\alpha_\sigma \cdot 1 = \alpha_\sigma$.
>
> Combining both terms:
> $$
> \sigma(\gamma) = \gamma - \alpha_\sigma.
> $$
> Rearranging gives:
> $$
> \alpha_\sigma = \gamma - \sigma(\gamma).
> $$
>
> This shows that every 1-cocycle $\{\alpha_\sigma\}_{\sigma \in G}$ is a 1-coboundary.
> Therefore:
> $$
> H^1(G, W_n(K)) = 0.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Witt Vectors and Artin-Schreier-Witt Theory|Witt Vectors and Artin-Schreier-Witt Theory]]
- [[05 - Galois Theory/Concepts/Hilbert's Theorem 90|Hilbert's Theorem 90]]
- [[05 - Galois Theory/Concepts/Finite Fields Galois|Galois Theory of Finite Fields]]
- [[05 - Galois Theory/Concepts/Automorphisms|Automorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]

## Notes

- This result generalizes the classical additive Hilbert's Theorem 90, which is precisely the case $n = 1$ ($W_1(K) \cong K$, $H^1(G, K) = 0$).
- Vanishing of $H^1(G, W_n(K))$ is the key cohomological input that allows the Artin-Schreier-Witt exact sequence $0 \to W_n(\mathbf{F}_p) \to W_n(K) \xrightarrow{\wp} W_n(K) \to 0$ to yield cyclic extensions of degree $p^n$.
