---
title: "Exercise Gal134: The Artin-Schreier-Witt Operator and Extensions of Degree p to the n"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - witt-vectors
  - artin-schreier-theory
  - cyclic-extensions
  - characteristic-p
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 50, printed pp. 331-332, PDF pp. 346-347"
created: 2026-09-12
---

# Exercise Gal134: The Artin-Schreier-Witt Operator and Extensions of Degree p to the n

## Problem Statement

> [!question]
> If $x \in W_n(k)$, show that there exists $\xi \in W_n(\bar{k})$ such that $\wp(\xi) = x$. Do this inductively, solving first for the first component, and then showing that a vector $(0, \alpha_1, \dots, \alpha_{n-1})$ is in the image of $\wp$ if and only if $(\alpha_1, \dots, \alpha_{n-1})$ is in the image of $\wp$. Prove inductively that if $\xi, \xi' \in W_n(k')$ for some extension $k'$ of $k$ and if $\wp\xi = \wp\xi'$ then $\xi - \xi'$ is a vector with components in the prime field. Hence the solutions of $\wp\xi = x$ for given $x \in W_n(k)$ all differ by the vectors with components in the prime field, and there are $p^n$ such vectors. We define
> $$
> k(\xi) = k(\xi_0, \dots, \xi_{n-1}),
> $$
> or symbolically, $k(\wp^{-1} x)$.
> Prove that it is a Galois extension of $k$, and show that the cyclic extensions of $k$, of degree $p^n$, are precisely those of type $k(\wp^{-1} x)$ with a vector $x$ such that $x_0 \notin \wp k$.

## Hints

> [!hint]- Weak Hint
> Recall that the 0-th component of $\wp(\xi) = F\xi - \xi$ is simply $\xi_0^p - \xi_0$, which is the classical Artin-Schreier equation.

> [!hint]- Moderate Hint
> - If $\xi_0^p - \xi_0 = x_0$, then $\xi - \{\xi_0\}$ has 0-th component 0, so it can be written as $V\eta$. Use the relation $\wp(V\eta) = V(\wp\eta)$ to reduce to length $n - 1$.
> - The kernel of $\wp$ in $W_n(\bar{k})$ consists of elements satisfying $F\xi = \xi$. Show that $F\xi = \xi$ implies each $\xi_i \in \mathbf{F}_p$.

> [!hint]- Strong Hint
> For any $\sigma \in \operatorname{Gal}(\bar{k}/k)$, $\wp(\sigma\xi - \xi) = \sigma x - x = 0$, so $\sigma\xi - \xi \in W_n(\mathbf{F}_p) \cong \mathbf{Z}/p^n\mathbf{Z}$. Show that $[k(\xi) : k] = p^n$ if and only if the order of $\sigma\xi - \xi$ can reach $p^n$, which is equivalent to the first Artin-Schreier step having degree $p$, i.e. $x_0 \notin \wp k$.

## Solution

> [!success]- Complete Derivation
> Let $k$ be a field of characteristic $p > 0$, $\bar{k}$ an algebraic closure, and $W_n(k)$ the ring of truncated Witt vectors of length $n$ with components $(x_0, x_1, \dots, x_{n-1})$.
> The Artin-Schreier-Witt operator $\wp: W_n(\bar{k}) \to W_n(\bar{k})$ is defined by:
> $$
> \wp(\xi) = F\xi - \xi.
> $$
>
> ---
>
> ### 1. Solvability of $\wp(\xi) = x$ in $W_n(\bar{k})$
> We prove by induction on $n \ge 1$ that for every $x \in W_n(k)$, there exists $\xi \in W_n(\bar{k})$ such that $\wp(\xi) = x$.
>
> - **Base Case $n = 1$:**
>   $W_1(k) \cong k$. The equation $\wp(\xi) = x$ is $\xi_0^p - \xi_0 = x_0$.
>   Since $\bar{k}$ is algebraically closed, the polynomial $T^p - T - x_0$ has roots in $\bar{k}$. Picking any root $\xi_0 \in \bar{k}$ gives $\wp(\xi_0) = x_0$.
>
> - **Inductive Step:**
>   Assume the result holds for length $n - 1$.
>   Let $x = (x_0, x_1, \dots, x_{n-1}) \in W_n(k)$.
>   First, pick $\xi_0 \in \bar{k}$ such that $\xi_0^p - \xi_0 = x_0$.
>   Consider the Teichmüller representative $\{\xi_0\} = (\xi_0, 0, \dots, 0) \in W_n(\bar{k})$.
>   Compute $\wp(\{\xi_0\})$:
>   Its 0-th component is $\xi_0^p - \xi_0 = x_0$.
>   Therefore, the difference
>   $$
>   y = x - \wp(\{\xi_0\}) \in W_n(k(\xi_0))
>   $$
>   has 0-th component $y_0 = x_0 - x_0 = 0$.
>   Thus $y$ is of the form $y = (0, y_1, \dots, y_{n-1}) = V z$ for some $z = (y_1, \dots, y_{n-1}) \in W_{n-1}(\bar{k})$.
>
>   Observe that for any vector $\eta \in W_{n-1}(\bar{k})$:
>   $$
>   \wp(V \eta) = F(V \eta) - V \eta = V(F \eta) - V \eta = V(F\eta - \eta) = V(\wp \eta).
>   $$
>   Hence, $V z \in \operatorname{im}(\wp)$ if and only if $z \in \operatorname{im}(\wp)$ in $W_{n-1}(\bar{k})$.
>   By the induction hypothesis, there exists $\eta \in W_{n-1}(\bar{k})$ such that $\wp(\eta) = z$.
>   Setting $V \eta = (0, \eta_0, \dots, \eta_{n-2}) \in W_n(\bar{k})$, we have:
>   $$
>   \wp(V \eta) = V(\wp \eta) = V z = y.
>   $$
>   Now define:
>   $$
>   \xi = \{\xi_0\} + V \eta \in W_n(\bar{k}).
>   $$
>   Since $\wp$ is an additive group homomorphism:
>   $$
>   \wp(\xi) = \wp(\{\xi_0\}) + \wp(V \eta) = (x - y) + y = x.
>   $$
>   This completes the induction.
>
> ---
>
> ### 2. The Kernel of $\wp$ and Number of Solutions
> Let $\xi, \xi' \in W_n(k')$ be two solutions to $\wp(\xi) = x$.
> Let $\delta = \xi - \xi'$. Then $\wp(\delta) = F\delta - \delta = 0$, which means:
> $$
> F\delta = \delta.
> $$
> We prove by induction on $n$ that $F\delta = \delta \iff \delta \in W_n(\mathbf{F}_p)$.
> - For $n = 1$: $\delta_0^p = \delta_0 \iff \delta_0 \in \mathbf{F}_p$.
> - For general $n$: The 0-th component gives $\delta_0^p = \delta_0$, so $\delta_0 \in \mathbf{F}_p$.
>   Then $\delta - \{\delta_0\}$ has 0-th component 0, so $\delta - \{\delta_0\} = V \mu$ for $\mu \in W_{n-1}(k')$.
>   Then $0 = \wp(\delta) = \wp(\{\delta_0\}) + \wp(V \mu) = 0 + V(\wp \mu)$.
>   Since $V$ is injective, $\wp(\mu) = 0$.
>   By induction, $\mu \in W_{n-1}(\mathbf{F}_p)$, so all components of $\mu$ lie in $\mathbf{F}_p$.
>   Thus all components of $\delta = \{\delta_0\} + V \mu$ lie in $\mathbf{F}_p$.
>
> Conversely, if $\delta \in W_n(\mathbf{F}_p)$, each component satisfies $\delta_i^p = \delta_i$, so $F\delta = \delta$, which means $\wp(\delta) = 0$.
> Thus:
> $$
> \ker(\wp) = W_n(\mathbf{F}_p).
> $$
> Since each component $\delta_i \in \mathbf{F}_p$ has $p$ choices, the group $W_n(\mathbf{F}_p)$ has order
> $$
> |W_n(\mathbf{F}_p)| = p^n.
> $$
> Furthermore, $W_n(\mathbf{F}_p) \cong \mathbf{Z}/p^n\mathbf{Z}$ as additive groups (via ghost components or because $p^n \cdot 1 = 0$ and $p^{n-1} \cdot 1 \ne 0$).
> Thus all solutions to $\wp(\xi) = x$ differ by elements of $W_n(\mathbf{F}_p)$, and there are exactly $p^n$ distinct solutions in $W_n(\bar{k})$.
>
> ---
>
> ### 3. $k(\xi)$ is a Galois Extension
> Let $\xi = (\xi_0, \dots, \xi_{n-1})$ be a solution to $\wp(\xi) = x \in W_n(k)$.
> Let $K = k(\xi) = k(\xi_0, \dots, \xi_{n-1})$.
>
> - **Normality and Separability:**
>   Each coordinate $\xi_i$ is a root of a separable polynomial obtained inductively:
>   $\xi_0$ satisfies $T^p - T - x_0 = 0$, which is separable because its derivative is $-1 \ne 0$.
>   Inductively, the $i$-th coordinate satisfies an equation of the form $\xi_i^p - \xi_i = P_i(\xi_0, \dots, \xi_{i-1}, x)$, which is also separable.
>   Any $k$-embedding $\sigma: K \hookrightarrow \bar{k}$ satisfies:
>   $$
>   \wp(\sigma \xi) = \sigma(\wp \xi) = \sigma(x) = x.
>   $$
>   Therefore, $\sigma\xi$ is another solution to $\wp(T) = x$.
>   By Step 2, there exists a unique vector $c_\sigma \in W_n(\mathbf{F}_p)$ such that:
>   $$
>   \sigma\xi = \xi + c_\sigma.
>   $$
>   Since the components of $c_\sigma$ lie in $\mathbf{F}_p \subseteq k \subseteq K$, each component of $\sigma\xi$ lies in $K$:
>   $$
>   \sigma(K) \subseteq K.
>   $$
>   Thus $K/k$ is normal and separable, hence **Galois**.
>
> - **Galois Group Embedding:**
>   The map $\sigma \mapsto c_\sigma$ is an injective homomorphism:
>   $$
>   \Phi: \operatorname{Gal}(K/k) \hookrightarrow W_n(\mathbf{F}_p) \cong \mathbf{Z}/p^n\mathbf{Z}.
>   $$
>   Indeed:
>   $$
>   \sigma \tau(\xi) = \sigma(\xi + c_\tau) = \sigma(\xi) + c_\tau = \xi + c_\sigma + c_\tau,
>   $$
>   so $c_{\sigma \tau} = c_\sigma + c_\tau$.
>   If $c_\sigma = 0$, then $\sigma(\xi_i) = \xi_i$ for all $i$, so $\sigma = \operatorname{id}_K$.
>   Thus $\operatorname{Gal}(K/k)$ is isomorphic to a subgroup of the cyclic group $\mathbf{Z}/p^n\mathbf{Z}$.
>   In particular, $K/k$ is always a **cyclic extension of degree dividing $p^n$**.
>
> ---
>
> ### 4. Characterization of Cyclic Extensions of Degree $p^n$
> The extension $K/k$ has degree $p^n$ if and only if $\operatorname{im}(\Phi) = W_n(\mathbf{F}_p) \cong \mathbf{Z}/p^n\mathbf{Z}$, which happens if and only if there exists $\sigma \in \operatorname{Gal}(K/k)$ such that $c_\sigma$ has order $p^n$.
>
> In the cyclic group $W_n(\mathbf{F}_p)$, an element $c = (c_0, \dots, c_{n-1})$ has order $p^n$ if and only if its 0-th component $c_0 \ne 0 \in \mathbf{F}_p$.
> For any $\sigma \in \operatorname{Gal}(K/k)$, the 0-th component of $\sigma\xi = \xi + c_\sigma$ is:
> $$
> \sigma(\xi_0) = \xi_0 + c_{\sigma, 0}.
> $$
> This is precisely the action of $\sigma$ on the first subextension $k(\xi_0)/k$.
> The extension $k(\xi_0)/k$ is an Artin-Schreier extension defined by $\xi_0^p - \xi_0 = x_0$.
> By classical Artin-Schreier theory, $[k(\xi_0) : k] = p$ if and only if $x_0 \notin \wp k = \{a^p - a \mid a \in k\}$.
>
> - If $x_0 \in \wp k$, then $k(\xi_0) = k$, so $\xi_0 \in k$. Then $c_{\sigma, 0} = \sigma(\xi_0) - \xi_0 = 0$ for all $\sigma \in \operatorname{Gal}(K/k)$.
>   Then every element in $\operatorname{im}(\Phi)$ has order dividing $p^{n-1}$, so $[K : k] \le p^{n-1} < p^n$.
> - Conversely, if $x_0 \notin \wp k$, then $[k(\xi_0) : k] = p$.
>   Then there exists $\sigma \in \operatorname{Gal}(K/k)$ such that $\sigma(\xi_0) \ne \xi_0$, so $c_{\sigma, 0} \ne 0$.
>   In $W_n(\mathbf{F}_p) \cong \mathbf{Z}/p^n\mathbf{Z}$, any element with non-zero 0-th component is a generator of the cyclic group $\mathbf{Z}/p^n\mathbf{Z}$.
>   Thus the subgroup $\operatorname{im}(\Phi)$ contains a generator, so $\operatorname{im}(\Phi) = W_n(\mathbf{F}_p)$.
>   Therefore, $[K : k] = p^n$, and $K/k$ is cyclic of degree $p^n$.
>
> Thus cyclic extensions of $k$ of degree $p^n$ are precisely those of the form $k(\wp^{-1} x)$ with $x_0 \notin \wp k$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclic Extensions|Cyclic Extensions]]
- [[05 - Galois Theory/Concepts/Witt Vectors and Artin-Schreier-Witt Theory|Witt Vectors and Artin-Schreier-Witt Theory]]
- [[05 - Galois Theory/Concepts/Artin-Schreier Extensions|Artin–Schreier Extensions]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[05 - Galois Theory/Concepts/Finite Fields Galois|Galois Theory of Finite Fields]]

## Notes

- This theorem is the Artin-Schreier-Witt counterpart of the Kummer theory theorem that cyclic extensions of degree $n$ (when $\boldsymbol{\mu}_n \subset k$) are of the form $k(a^{1/n})$ with $a \notin k^{*p}$ for any prime $p \mid n$.
- Witt vectors provide the canonical algebraic language for studying unramified and wildly ramified cyclic extensions in characteristic $p$.
