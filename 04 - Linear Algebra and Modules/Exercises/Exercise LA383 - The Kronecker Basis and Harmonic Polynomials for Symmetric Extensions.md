---
title: "Exercise LA383: The Kronecker Basis and Harmonic Polynomials for Symmetric Extensions"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - free-modules
  - symmetric-polynomials
  - harmonic-polynomials
  - chevalley-theorem
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VII, Extensions of Rings, Exercise 12, printed p. 354, PDF p. 369"
created: 2026-09-15
---

# Exercise LA383: The Kronecker Basis and Harmonic Polynomials for Symmetric Extensions

## Problem Statement

> [!question] Lang, Chapter VII, Exercise 12
> **Symmetric Polynomials**
> 
> Let $F$ be a field of characteristic 0. Let $t_1,\ldots,t_n$ be algebraically independent over $F$. Let $s_1,\ldots,s_n$ be the elementary symmetric functions. Then $R = F[t_1,\ldots,t_n]$ is an integral extension of $S = F[s_1,\ldots,s_n]$, and actually is its integral closure in the rational field $F(t_1,\ldots,t_n)$. Let $W$ be the group of permutations of the variables $t_1,\ldots,t_n$.
> 
> (a) Show that $S = R^W$ is the fixed subring of $R$ under $W$.
> 
> (b) Show that the elements $t_1^{r_1}\cdots t_n^{r_n}$ with $0\le r_i\le n-i$ form a basis of $R$ over $S$, so in particular, $R$ is free over $S$.
> 
> I am told that the above basis is due to Kronecker. There is a much more interesting basis, which can be defined as follows.
> 
> Let $\partial_1,\ldots,\partial_n$ be the partial derivatives with respect to $t_1,\ldots,t_n$, so $\partial_i = \partial/\partial t_i$. Let $P\in F[t]=F[t_1,\ldots,t_n]$. Substituting $\partial_i$ for $t_i$ ($i=1,\ldots,n$) gives a partial differential operator $P(\partial) = P(\partial_1,\ldots,\partial_n)$ on $R$. An element of $S$ can also be viewed as an element of $R$. Let $Q\in R$. We say that $Q$ is $W$-harmonic if $P(\partial)Q = 0$ for all symmetric polynomials $P\in S$ with 0 constant term. It can be shown that the $W$-harmonic polynomials form a finite dimensional space. Furthermore, if $\{H_1,\ldots,H_N\}$ is a basis for this space over $F$, then it is also a basis for $R$ over $S$. This is a special case of a general theorem of Chevalley. See [La 99b], where the special case is worked out in detail.

## Hints

> [!hint]- Hint 1: For part (a), invoke the Fundamental Theorem of Symmetric Polynomials
> Any element $P\in R^W$ is a polynomial that is invariant under all permutations of the variables $t_1,\ldots,t_n$. What does the Fundamental Theorem of Symmetric Polynomials assert about expressing symmetric polynomials in terms of elementary symmetric polynomials?

> [!hint]- Hint 2: For part (b), construct descending monic relations
> Consider the universal polynomial $f(X)=\prod_{j=1}^n (X-t_j) = X^n - s_1 X^{n-1} + \cdots + (-1)^n s_n \in S[X]$. What polynomial does $t_{n-1}$ satisfy after dividing $f(X)$ by $X-t_n$?

> [!hint]- Hint 3: Compare spanning set size with field degree
> Count the number of monomials $t_1^{r_1}\cdots t_n^{r_n}$ satisfying $0\le r_i\le n-i$. Compare this count to the degree of the Galois extension $[F(t_1,\ldots,t_n):F(s_1,\ldots,s_n)] = |W| = n!$.

> [!hint]- Hint 4: On Chevalley's theorem and $W$-harmonic polynomials
> The space of $W$-harmonic polynomials $\mathcal H_W$ is isomorphic to the coinvariant algebra $R / \langle s_1,\ldots,s_n\rangle R$. Verify why any graded $F$-basis of $\mathcal H_W$ lifts to an $S$-basis of $R$.

## Solution

> [!success]- Complete Derivation
> Let $F$ be a field of characteristic 0. Let $t_1,\ldots,t_n$ be algebraically independent variables over $F$, and let $s_1,\ldots,s_n$ be the elementary symmetric polynomials:
> $$
> s_k = \sum_{1\le j_1 < \cdots < j_k \le n} t_{j_1}\cdots t_{j_k}.
> $$
> Let $R = F[t_1,\ldots,t_n]$, $S = F[s_1,\ldots,s_n]$, and let $W = S_n$ be the symmetric group of permutations of the variables.
> 
> ---
> 
> ### Part (a): The Fixed Subring $S = R^W$
> 
> 1. **Containment $S \subseteq R^W$:**
>    Each elementary symmetric polynomial $s_k$ is, by definition, invariant under every permutation $\sigma\in W$:
>    $$
>    \sigma(s_k) = s_k\qquad\text{for all }\sigma\in W,\ k=1,\ldots,n.
>    $$
>    Since any element of $S = F[s_1,\ldots,s_n]$ is a polynomial expression in $s_1,\ldots,s_n$ with coefficients in $F$, every element of $S$ is invariant under $W$. Thus:
>    $$
>    S \subseteq R^W.
>    $$
> 
> 2. **Containment $R^W \subseteq S$:**
>    Let $P(t_1,\ldots,t_n)\in R^W$. Then $P$ is a symmetric polynomial in $t_1,\ldots,t_n$ with coefficients in $F$.
>    By the **Fundamental Theorem of Symmetric Polynomials** (Chapter IV §2 / Chapter V §2), every symmetric polynomial can be written uniquely as a polynomial in the elementary symmetric polynomials:
>    $$
>    P(t_1,\ldots,t_n) = g(s_1,\ldots,s_n)\qquad\text{for some }g\in F[X_1,\ldots,X_n].
>    $$
>    Therefore, $P\in F[s_1,\ldots,s_n] = S$.
> 
> Combining both inclusions:
> $$
> R^W = S.
> $$
> 
> ---
> 
> ### Part (b): The Kronecker Basis for $R$ over $S$
> 
> Consider the set of monomials:
> $$
> \mathcal B = \left\{ t_1^{r_1} t_2^{r_2} \cdots t_n^{r_n} : 0 \le r_i \le n - i\text{ for each }i=1,\ldots,n \right\}.
> $$
> 
> Notice the range of each exponent:
> - For $i=1$: $0 \le r_1 \le n-1$ ($n$ choices);
> - For $i=2$: $0 \le r_2 \le n-2$ ($n-1$ choices);
> - $\cdots$
> - For $i=n-1$: $0 \le r_{n-1} \le 1$ ($2$ choices);
> - For $i=n$: $0 \le r_n \le 0$, so $r_n = 0$ ($1$ choice).
> 
> The total number of monomials in $\mathcal B$ is:
> $$
> |\mathcal B| = n \cdot (n-1) \cdot (n-2) \cdots 2 \cdot 1 = n!.
> $$
> 
> #### Step 1: $\mathcal B$ spans $R$ as an $S$-module
> Consider the generic polynomial whose roots are $t_1,\ldots,t_n$:
> $$
> f(X) = \prod_{j=1}^n (X - t_j) = X^n - s_1 X^{n-1} + s_2 X^{n-2} - \cdots + (-1)^n s_n \in S[X].
> $$
> 
> Each $t_j$ is a root of $f(X)$.
> In particular, for $t_n$, $f(t_n) = 0$, so $t_n^n \in \sum_{k=0}^{n-1} S t_n^k$.
> 
> Now divide $f(X)$ by $X - t_n$ in $S[t_n][X]$:
> $$
> f_1(X) = \frac{f(X)}{X - t_n} = \prod_{j=1}^{n-1} (X - t_j) = X^{n-1} + u_{n-2} X^{n-2} + \cdots + u_0,
> $$
> where each coefficient $u_k$ is an elementary symmetric polynomial in $t_1,\ldots,t_{n-1}$, which belongs to $S[t_n]$ by polynomial division with remainder.
> 
> Since $t_{n-1}$ is a root of $f_1(X)$:
> $$
> t_{n-1}^{n-1} = -u_{n-2} t_{n-1}^{n-2} - \cdots - u_0 \in \sum_{r_{n-1}=0}^{n-2} S[t_n] t_{n-1}^{r_{n-1}}.
> $$
> Thus any power $t_{n-1}^k$ ($k \ge n-1$) can be rewritten as a linear combination of $1, t_{n-1}, \ldots, t_{n-1}^{n-2}$ with coefficients in $S[t_n]$.
> 
> Iterating this division process: at each step $i \in \{1,\ldots,n\}$, dividing by $(X - t_i)\cdots(X - t_n)$ yields a monic polynomial in $X$ of degree $n - i$ with coefficients in $S[t_{i+1},\ldots,t_n]$, of which $t_i$ is a root:
> $$
> t_i^{n-i+1} + \sum_{k=0}^{n-i} v_k(t_{i+1},\ldots,t_n) t_i^k = 0,\qquad v_k\in S[t_{i+1},\ldots,t_n].
> $$
> 
> By successive reduction from $i=1$ to $i=n$, any monomial $t_1^{m_1}\cdots t_n^{m_n}$ can be reduced modulo these relations to an $S$-linear combination of monomials with $r_i \le n - i$.
> 
> Therefore:
> $$
> R = \sum_{b\in\mathcal B} S b.
> $$
> 
> #### Step 2: Linear independence of $\mathcal B$ over $S$
> Pass to the fraction fields $K = F(s_1,\ldots,s_n)$ and $L = F(t_1,\ldots,t_n)$.
> 
> The field extension $L/K$ is the splitting field of $f(X)\in K[X]$, hence is a Galois extension with Galois group $W = S_n$.
> The degree of the extension is:
> $$
> [L : K] = |W| = n!.
> $$
> 
> Since $\mathcal B$ spans $R$ over $S$, it also spans the quotient field $L = R \otimes_S K$ as a $K$-vector space:
> $$
> L = \sum_{b\in\mathcal B} K b.
> $$
> 
> The number of elements in $\mathcal B$ is $|\mathcal B| = n! = \dim_K L$.
> In any $K$-vector space of dimension $n!$, any spanning set of $n!$ elements is automatically a **basis**!
> 
> Thus $\mathcal B$ is linearly independent over $K$.
> A fortiori, $\mathcal B$ is linearly independent over $S \subset K$.
> 
> Therefore, $\mathcal B = \{t_1^{r_1}\cdots t_n^{r_n} : 0\le r_i\le n-i\}$ is a free basis of $R$ over $S$.
> In particular, $R$ is a **free $S$-module of rank $n!$**.
> 
> ---
> 
> ### Notes on Chevalley's Theorem and $W$-Harmonic Polynomials
> 
> Let $S_+ = \{P\in S : P(0)=0\}$ be the ideal of symmetric polynomials without constant term, generated by $s_1,\ldots,s_n$.
> 
> 1. **The Differential Operator Representation:**
>    The polynomial differential operator $P(\partial)$ assigns to $P = \sum c_\alpha t^\alpha$ the operator $\sum c_\alpha \frac{\partial^{|\alpha|}}{\partial t_1^{\alpha_1}\cdots\partial t_n^{\alpha_n}}$.
> 
> 2. **Fischer Inner Product:**
>    On the space of polynomials, define the non-degenerate pairing:
>    $$
>    \langle P, Q \rangle = (P(\partial)Q)(0).
>    $$
>    Under this pairing, the differential operator $\partial_i$ is adjoint to multiplication by $t_i$.
> 
> 3. **The Space of $W$-Harmonic Polynomials:**
>    $$
>    \mathcal H_W = \{Q\in R : P(\partial)Q = 0\text{ for all }P\in S_+\}.
>    $$
>    Under the Fischer inner product, $\mathcal H_W$ is the orthogonal complement of the ideal $I = S_+ R = (s_1,\ldots,s_n)R$:
>    $$
>    R = \mathcal H_W \oplus (s_1,\ldots,s_n)R.
>    $$
> 
> 4. **Chevalley's Theorem:**
>    By Chevalley's theorem for finite reflection groups (specialized to the Weyl group $W=S_n$ of type $A_{n-1}$):
>    - The coinvariant algebra $R / (s_1,\ldots,s_n)R$ is finite-dimensional over $F$, with dimension equal to $|W| = n!$;
>    - The restriction map $\mathcal H_W \to R / (s_1,\ldots,s_n)R$ is an isomorphism of graded $F$-vector spaces, so $\dim_F \mathcal H_W = n!$;
>    - The multiplication homomorphism:
>      $$
>      \mathcal H_W \otimes_F S \longrightarrow R,\qquad H \otimes P \longmapsto H \cdot P
>      $$
>      is an isomorphism of $S$-modules.
> 
> Consequently, if $\{H_1,\ldots,H_{n!}\}$ is an $F$-basis for the space of $W$-harmonic polynomials, then $\{H_1,\ldots,H_{n!}\}$ is also a free basis for $R$ over $S$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[02 - Ring Theory/Concepts/Symmetric Polynomials and Newton Identities|Symmetric Polynomials and Newton Identities]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA375 - A Free Basis over the Symmetric Polynomial Ring|Exercise LA375: A Free Basis over the Symmetric Polynomial Ring]]

## Notes

- **Kronecker vs. Chevalley Basis:** The Kronecker basis $\{t_1^{r_1}\cdots t_n^{r_n} : 0\le r_i\le n-i\}$ is concrete and monomial, while Chevalley's $W$-harmonic basis reflects the representation theory and geometry of the reflection group $W = S_n$.
- **Vandermonde Determinant:** The top-degree $W$-harmonic polynomial is the Vandermonde determinant $\Delta(t) = \prod_{i<j} (t_j - t_i)$, of degree $\binom{n}{2} = n(n-1)/2$.
- **Independent Derivation:** The step-by-step polynomial reduction and dimension comparison with the Galois degree $[F(t):F(s)]=n!$ are derived independently above.
