---
title: "Exercise Gal116: Discriminants of Basis and Polynomial Derivations"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - discriminant
  - field-trace
  - norm-and-trace
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 32, printed pp. 325-326, PDF pp. 340-341"
created: 2026-09-12
---

# Exercise Gal116: Discriminants of Basis and Polynomial Derivations

## Problem Statement

> [!question]
> Let $E$ be a finite separable extension of $k$, of degree $n$. Let $W = (w_1, \dots, w_n)$ be elements of $E$. Let $\sigma_1, \dots, \sigma_n$ be the distinct embeddings of $E$ in $k^{\mathrm{a}}$ over $k$. Define the **discriminant** of $W$ to be
> $$
> D_{E/k}(W) = \det(\sigma_i w_j)^2.
> $$
> Prove:
> 
> (a) If $V = (v_1, \dots, v_n)$ is another set of elements of $E$ and $C = (c_{ij})$ is a matrix of elements of $k$ such that $w_i = \sum_{j=1}^n c_{ij} v_j$, then
> $$
> D_{E/k}(W) = \det(C)^2 D_{E/k}(V).
> $$
> 
> (b) The discriminant is an element of $k$.
> 
> (c) Let $E = k(\alpha)$ and let $f(X) = \operatorname{Irr}(\alpha, k, X)$. Let $\alpha_1, \dots, \alpha_n$ be the roots of $f$ and say $\alpha = \alpha_1$. Then
> $$
> f'(\alpha) = \prod_{j=2}^n (\alpha - \alpha_j).
> $$
> Show that
> $$
> D_{E/k}(1, \alpha, \dots, \alpha^{n-1}) = (-1)^{n(n-1)/2} N_k^E(f'(\alpha)).
> $$
> 
> (d) Let the notation be as in (a). Show that $\det(\operatorname{Tr}(w_i w_j)) = (\det(\sigma_i w_j))^2$. [Hint: Let $A$ be the matrix $(\sigma_i w_j)$. Show that ${}^t\!A A$ is the matrix $(\operatorname{Tr}(w_i w_j))$.]

## Hints

> [!hint]- Weak Hint
> Express the change of basis in matrix notation, and write the trace of an element $x \in E$ as the sum of its conjugates $\sum_{i=1}^n \sigma_i(x)$.

> [!hint]- Moderate Hint
> - For (a), compute $\sigma_i(w_j)$ by applying $\sigma_i$ to $\sum_m c_{jm} v_m$, remembering that $\sigma_i$ fixes $k$.
> - For (c), the matrix $(\sigma_i(\alpha^{j-1}))$ is a Vandermonde matrix whose determinant has a well-known product formula.
> - For (d), compute the matrix product ${}^t\!A A$ entry by entry.

> [!hint]- Strong Hint
> - In (c), $\det(\alpha_i^{j-1}) = \prod_{1 \le i < j \le n} (\alpha_j - \alpha_i)$. The square of this product can be rearranged as $(-1)^{n(n-1)/2} \prod_{i \ne j} (\alpha_i - \alpha_j)$.
> - In (d), entry $(i, j)$ of ${}^t\!A A$ is $\sum_{k=1}^n A_{ki} A_{kj} = \sum_{k=1}^n \sigma_k(w_i) \sigma_k(w_j) = \sum_{k=1}^n \sigma_k(w_i w_j) = \operatorname{Tr}_{E/k}(w_i w_j)$.

## Solution

> [!success]- Complete Derivation
> Let $E/k$ be a separable extension of degree $n$, and let $\sigma_1, \dots, \sigma_n$ be the distinct $k$-embeddings of $E$ into an algebraic closure $k^{\mathrm{a}}$.
>
> ---
>
> ### Part (a): Change of Basis Formula
> Let $V = (v_1, \dots, v_n)$ and $W = (w_1, \dots, w_n)$ with $w_j = \sum_{m=1}^n c_{jm} v_m$ for $c_{jm} \in k$.
>
> Applying the $k$-embedding $\sigma_i$ to $w_j$, since each $c_{jm} \in k$ and $\sigma_i$ fixes $k$ pointwise, we obtain:
> $$
> \sigma_i(w_j) = \sigma_i\left(\sum_{m=1}^n c_{jm} v_m\right) = \sum_{m=1}^n c_{jm} \sigma_i(v_m).
> $$
> Let $M_W$ denote the $n \times n$ matrix whose $(i, j)$-entry is $\sigma_i(w_j)$, and $M_V$ the matrix whose $(i, m)$-entry is $\sigma_i(v_m)$.
> Then
> $$
> (M_W)_{ij} = \sum_{m=1}^n (M_V)_{im} (C^t)_{mj},
> $$
> which means in matrix terms:
> $$
> M_W = M_V \, C^t.
> $$
> Taking determinants and using the multiplicative property of the determinant:
> $$
> \det(M_W) = \det(M_V) \det(C^t) = \det(M_V) \det(C).
> $$
> Squaring both sides yields:
> $$
> D_{E/k}(W) = \det(M_W)^2 = \det(C)^2 \det(M_V)^2 = \det(C)^2 D_{E/k}(V).
> $$
>
> ---
>
> ### Part (b): Invariance under Galois Actions
> Let $N$ be the normal closure of $E$ over $k$. Any $k$-automorphism $\tau \in \operatorname{Gal}(N/k)$ acts on the set of embeddings $\{\sigma_1, \dots, \sigma_n\}$ by composition:
> $$
> \tau \circ \sigma_i = \sigma_{\pi(i)},
> $$
> where $\pi \in S_n$ is a permutation of $\{1, \dots, n\}$.
>
> Therefore, applying $\tau$ to the matrix $M_W = (\sigma_i w_j)$ permutes the rows of $M_W$ according to $\pi$:
> $$
> \tau(\det(M_W)) = \det(\sigma_{\pi(i)} w_j) = \operatorname{sgn}(\pi) \det(\sigma_i w_j).
> $$
> Since $\operatorname{sgn}(\pi) \in \{\pm 1\}$, squaring gives:
> $$
> \tau(D_{E/k}(W)) = \tau(\det(M_W)^2) = (\operatorname{sgn}(\pi))^2 \det(M_W)^2 = D_{E/k}(W).
> $$
> Since $D_{E/k}(W)$ is fixed by every $\tau \in \operatorname{Gal}(N/k)$, Galois theory implies that
> $$
> D_{E/k}(W) \in k.
> $$
> (Alternatively, by part (d), $D_{E/k}(W) = \det(\operatorname{Tr}_{E/k}(w_i w_j))$, and since each trace $\operatorname{Tr}_{E/k}(w_i w_j)$ belongs to $k$, the matrix has entries in $k$, so its determinant necessarily lies in $k$.)
>
> ---
>
> ### Part (c): Discriminant of a Power Basis
> Let $E = k(\alpha)$ where $f(X) = \operatorname{Irr}(\alpha, k, X) = \prod_{i=1}^n (X - \alpha_i)$ has distinct roots $\alpha_1, \dots, \alpha_n$ with $\alpha = \alpha_1$.
> The distinct embeddings of $E$ over $k$ map $\alpha$ to each root $\alpha_i$:
> $$
> \sigma_i(\alpha) = \alpha_i \quad (i = 1, \dots, n).
> $$
> For the basis $W = (1, \alpha, \alpha^2, \dots, \alpha^{n-1})$, the matrix $M_W$ has $(i, j)$-entry:
> $$
> (M_W)_{ij} = \sigma_i(\alpha^{j-1}) = \alpha_i^{j-1} \quad (1 \le i, j \le n).
> $$
> This is the Vandermonde matrix in $\alpha_1, \dots, \alpha_n$. Its determinant is given by the standard formula:
> $$
> \det(M_W) = \prod_{1 \le i < j \le n} (\alpha_j - \alpha_i).
> $$
> Squaring this determinant, we obtain:
> $$
> D_{E/k}(1, \alpha, \dots, \alpha^{n-1}) = \prod_{1 \le i < j \le n} (\alpha_j - \alpha_i)^2.
> $$
> Observe that
> $$
> (\alpha_j - \alpha_i)^2 = -(\alpha_i - \alpha_j)(\alpha_j - \alpha_i).
> $$
> There are $\binom{n}{2} = \frac{n(n-1)}{2}$ pairs $(i, j)$ with $i < j$. Factoring out a minus sign for each pair gives:
> $$
> \prod_{1 \le i < j \le n} (\alpha_j - \alpha_i)^2 = (-1)^{n(n-1)/2} \prod_{1 \le i < j \le n} (\alpha_i - \alpha_j)(\alpha_j - \alpha_i) = (-1)^{n(n-1)/2} \prod_{\substack{i, j = 1 \\ i \ne j}}^n (\alpha_i - \alpha_j).
> $$
> Now consider the derivative $f'(X)$:
> $$
> f'(X) = \sum_{i=1}^n \prod_{j \ne i} (X - \alpha_j).
> $$
> Evaluating at $X = \alpha_i$, all terms in the sum except the $i$-th vanish, giving:
> $$
> f'(\alpha_i) = \prod_{j \ne i} (\alpha_i - \alpha_j).
> $$
> In particular, for $\alpha = \alpha_1$, $f'(\alpha) = \prod_{j=2}^n (\alpha - \alpha_j)$.
> The norm $N_k^E(f'(\alpha))$ is the product of all conjugates of $f'(\alpha)$:
> $$
> N_k^E(f'(\alpha)) = \prod_{i=1}^n \sigma_i(f'(\alpha)) = \prod_{i=1}^n f'(\alpha_i) = \prod_{i=1}^n \prod_{j \ne i} (\alpha_i - \alpha_j) = \prod_{\substack{i, j = 1 \\ i \ne j}}^n (\alpha_i - \alpha_j).
> $$
> Substituting this back into the discriminant expression:
> $$
> D_{E/k}(1, \alpha, \dots, \alpha^{n-1}) = (-1)^{n(n-1)/2} N_k^E(f'(\alpha)).
> $$
>
> ---
>
> ### Part (d): Relation with the Trace Matrix
> Let $A = (\sigma_i w_j)_{1 \le i, j \le n}$, so $A_{ij} = \sigma_i(w_j)$.
> The transpose matrix ${}^t\!A$ has entries $({}^t\!A)_{ij} = A_{ji} = \sigma_j(w_i)$.
>
> Consider the matrix product $B = {}^t\!A A$. Its $(i, j)$-entry is:
> $$
> B_{ij} = \sum_{k=1}^n ({}^t\!A)_{ik} A_{kj} = \sum_{k=1}^n \sigma_k(w_i) \sigma_k(w_j) = \sum_{k=1}^n \sigma_k(w_i w_j).
> $$
> Since $E/k$ is separable of degree $n$, the trace of any element $x \in E$ is the sum of its images under the $n$ distinct embeddings into $k^{\mathrm{a}}$:
> $$
> \operatorname{Tr}_{E/k}(x) = \sum_{k=1}^n \sigma_k(x).
> $$
> Therefore:
> $$
> B_{ij} = \operatorname{Tr}_{E/k}(w_i w_j).
> $$
> Thus ${}^t\!A A$ is precisely the trace matrix $(\operatorname{Tr}_{E/k}(w_i w_j))$.
>
> Taking the determinant of both sides:
> $$
> \det(\operatorname{Tr}(w_i w_j)) = \det({}^t\!A A) = \det({}^t\!A) \det(A) = (\det A)^2 = (\det(\sigma_i w_j))^2.
> $$
> This completes the proof.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[05 - Galois Theory/Concepts/Hilbert's Theorem 90|Hilbert's Theorem 90]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]

## Notes

- A set of $n$ elements $W = (w_1, \dots, w_n)$ forms a $k$-basis of $E$ if and only if $D_{E/k}(W) \ne 0$. This non-degeneracy of the trace bilinear form $(x, y) \mapsto \operatorname{Tr}_{E/k}(xy)$ is equivalent to the separability of the extension $E/k$.
- The factor $(-1)^{n(n-1)/2}$ arises frequently in the theory of number fields and polynomial discriminants: for a quadratic extension ($n=2$), $(-1)^{2(1)/2} = -1$; for a cubic ($n=3$), $(-1)^{3(2)/2} = -1$; for a quartic ($n=4$), $(-1)^{4(3)/2} = +1$.
