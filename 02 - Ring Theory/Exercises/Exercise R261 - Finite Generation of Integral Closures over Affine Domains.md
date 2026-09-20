---
title: "Exercise R261: Finite Generation of Integral Closures over Affine Domains"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - integral-extensions
  - noether-normalization
  - module-finiteness
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VIII, printed p. 375, PDF p. 390, Exercise 7"
created: 2026-09-15
---

# Exercise R261: Finite Generation of Integral Closures over Affine Domains

## Problem Statement

> [!question]
> Let $k$ be a field and $k[x_1, \ldots, x_n] = R$ a finitely generated entire ring over $k$ with quotient field $k(x)$. Let $L$ be a finite extension of $k(x)$. Let $I$ be the integral closure of $R$ in $L$. Show that $I$ is a finite $R$-module. [Use Noether normalization, and deal with the inseparability problem and the separable case in two steps.]

## Hints

> [!hint]- Hint 1: Noether normalization
> Find a polynomial subring $S=k[y_1,\ldots,y_r]\subset R$ over which $R$ is finite. By transitivity of integrality, the integral closures of $S$ and $R$ in $L$ coincide.

> [!hint]- Hint 2: The separable case
> Choose an $F=\operatorname{Frac}(S)$-basis of $L$ consisting of integral elements and take its trace-dual basis. Where must the coefficients of an integral element in this dual basis lie?

> [!hint]- Hint 3: Finitely many coefficients in the inseparable case
> Choose field generators $\alpha_i$ of $L/F$ and a common $q=p^e$ such that the $\alpha_i^q$ are separable over $F$. Adjoin $q$-th roots of $y_j$ and only the finitely many constants needed to take coefficientwise roots of separable polynomials for the $\alpha_i^q$. Do not adjoin $q$-th roots of every element of an arbitrary imperfect field $k$.

## Solution

> [!success]-
> ### Step 1: Reduction to a polynomial ring via Noether normalization
> 
> Let $R = k[x_1, \ldots, x_n]$ be an affine domain over $k$, with quotient field $K = k(x)$.
> Let $L$ be a finite field extension of $K$, and let $I$ be the integral closure of $R$ in $L$.
> 
> By Noether's Normalization Lemma (Lang, Chapter VIII, §2, Theorem 2.1):
> There exist elements $y_1, \ldots, y_r \in R$, algebraically independent over $k$ (where $r = \operatorname{tr.deg}_k K$), such that $R$ is integral over the polynomial subring
> $$
> S = k[y_1, \ldots, y_r].
> $$
> Because $R$ is a finitely generated $k$-algebra and is integral over $S$, $R$ is a **finitely generated $S$-module**.
> 
> Let $F = k(y_1, \ldots, y_r)$ be the fraction field of $S$.
> Since $S \subset R \subset K$, the field extension $K/F$ is finite algebraic.
> Since $L/K$ is a finite extension, $L/F$ is also a finite field extension.
> 
> Furthermore:
> - Every element of $R$ is integral over $S$.
> - By transitivity of integral extensions, an element $\alpha \in L$ is integral over $R$ if and only if $\alpha$ is integral over $S$.
> - Therefore, $I$ is precisely the **integral closure of $S$ in $L$**.
> 
> Moreover, if we show that $I$ is a finitely generated $S$-module:
> since $S \subset R$, any finite generating set of $I$ over $S$ also generates $I$ over $R$.
> Thus, it suffices to prove that **$I$ is a finite $S$-module**, where $S = k[y_1, \ldots, y_r]$ is a polynomial ring over a field.
> 
> Note that $S$ is a unique factorization domain, hence $S$ is **integrally closed** in its fraction field $F = k(y)$, and $S$ is a **Noetherian ring** by Hilbert's Basis Theorem.
> 
> ### Step 2: The case where $L/F$ is separable
> 
> Assume first that $L/F$ is a finite separable field extension, of degree $m = [L : F]$.
> 
> 1. **Non-degenerate trace form**:
>    Because $L/F$ is separable, the trace bilinear form
>    $$
>    B(u, v) = \operatorname{Tr}_{L/F}(uv)
>    $$
>    is non-degenerate.
> 
> 2. **Integral basis of $L/F$**:
>    Let $\{v_1, \ldots, v_m\}$ be any $F$-basis of $L$.
>    Each $v_i$ satisfies a monic polynomial equation with coefficients in $F$.
>    By clearing denominators (multiplying by a suitable nonzero element $d_i \in S$), we may assume without loss of generality that each $v_i \in I$ (i.e. each $v_i$ is integral over $S$).
> 
> 3. **Trace dual basis**:
>    Since the trace form is non-degenerate, there exists a unique dual basis $\{v_1^*, \ldots, v_m^*\}$ of $L$ over $F$ satisfying:
>    $$
>    \operatorname{Tr}_{L/F}(v_i v_j^*) = \delta_{ij} \quad (1 \le i, j \le m).
>    $$
> 
> 4. **Containment in the dual module**:
>    Let $\alpha \in I$.
>    Since $\{v_j^*\}$ is an $F$-basis of $L$, we can express $\alpha$ as
>    $$
>    \alpha = \sum_{j=1}^m c_j v_j^* \quad \text{with } c_j \in F.
>    $$
>    For each $i \in \{1, \ldots, m\}$, multiplying by $v_i$ and taking the trace yields:
>    $$
>    \operatorname{Tr}_{L/F}(\alpha v_i) = \sum_{j=1}^m c_j \operatorname{Tr}_{L/F}(v_i v_j^*) = c_i.
>    $$
>    Since $\alpha \in I$ and $v_i \in I$, the product $\alpha v_i$ lies in the ring $I$, so $\alpha v_i$ is integral over $S$.
>    The minimal polynomial of $\alpha v_i$ over $F$ has coefficients in $S$ because $S$ is integrally closed.
>    The trace $\operatorname{Tr}_{L/F}(\alpha v_i)$ is an integer multiple of the sum of the roots of this minimal polynomial, so
>    $$
>    c_i = \operatorname{Tr}_{L/F}(\alpha v_i) \in S.
>    $$
>    Therefore,
>    $$
>    I \subset S v_1^* + S v_2^* + \cdots + S v_m^*.
>    $$
> 
> 5. **Noetherian submodule finiteness**:
>    The $S$-module $M = \sum_{j=1}^m S v_j^*$ is finitely generated.
>    Since $S$ is a Noetherian ring, every submodule of a finitely generated $S$-module is finitely generated.
>    Since $I$ is an $S$-submodule of $M$, $I$ is a **finitely generated $S$-module**.
> 
> ### Step 3: The general inseparable case
>
> Suppose $\operatorname{char}k=p>0$. Choose finitely many elements $\alpha_1,\ldots,\alpha_s$ with $L=F(\alpha_1,\ldots,\alpha_s)$. For an algebraic element in characteristic $p$, its irreducible polynomial has the form $h(T^{p^a})$ with $h$ separable. Thus some $p$-power of each $\alpha_i$ is separable over $F$. Choose one common $q=p^e$ such that every $\alpha_i^q$ is separable over $F$.
>
> For each $i$, let
> $$
> g_i(T)=\sum_{j=0}^{d_i} a_{ij}T^j\in F[T]
> $$
> be the monic separable minimal polynomial of $\alpha_i^q$. Write all the finitely many $a_{ij}$ as ratios of polynomials in $y_1,\ldots,y_r$ with coefficients in $k$. Let $C\subset k$ be the finite set of constants occurring in these numerators and denominators, and put
> $$
> k_1=k(c^{1/q}:c\in C),\qquad
> S'=k_1[y_1^{1/q},\ldots,y_r^{1/q}],\qquad F'=\operatorname{Frac}(S').
> $$
> Work in a common algebraic closure, so these purely inseparable roots are uniquely specified. The extension $k_1/k$ is finite. The ring $S'$ is a polynomial ring over $k_1$, and is finite over $S$: generators are products of a $k$-basis of $k_1$ with the monomials $\prod_j y_j^{a_j/q}$, where $0\le a_j<q$.
>
> Every coefficient $a_{ij}$ has a $q$-th root $b_{ij}\in F'$. Indeed, for a polynomial $A(y)=\sum_\nu c_\nu y^\nu$ with $c_\nu\in C$, its $q$-th root is $\sum_\nu c_\nu^{1/q}(y^{1/q})^\nu$, and the same holds for ratios. Define
> $$
> h_i(T)=\sum_{j=0}^{d_i} b_{ij}T^j\in F'[T].
> $$
> Then $h_i(\alpha_i)^q=g_i(\alpha_i^q)=0$, so $h_i(\alpha_i)=0$. Moreover $h_i$ is separable. To see this, let $\gamma$ be any root of $h_i$ in an algebraic closure of $F'$. Then $\gamma^q$ is a root of $g_i$, and
> $$
> h_i'(\gamma)^q=g_i'(\gamma^q)\ne0.
> $$
> The identity uses $j^q=j$ for integer coefficients viewed in the prime field. Thus every root of $h_i$ is simple. It follows that each $\alpha_i$ is separable over $F'$, and therefore $L'=LF'/F'$ is finite separable.
>
> Let $I'$ be the integral closure of $S'$ in $L'$. Step 2 shows that $I'$ is finite over $S'$, hence over $S$. Every element of $I$ is integral over $S\subset S'$ and lies in $L'$, so $I\subset I'$. Since $S$ is Noetherian, its submodule $I$ of the finite $S$-module $I'$ is finite over $S$, and consequently over $R$.
>
> Notice that the construction only makes the finitely many coefficients $a_{ij}$ into $q$-th powers in $F'$. It does not require the generally false inclusion $F\subset F'^q$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Dual spaces as Hom spaces]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[03 - Field Theory/Concepts/Purely Inseparable Extensions|Purely Inseparable Extensions]]

## Notes

- **Source and proof status**: [S2, Ch. VIII, Exercise 7, printed p. 375, PDF p. 390]. The source suggests Noether normalization and separation of the inseparable and separable cases; the full argument here is independently derived.
- **Imported inputs**: Noether normalization (Lang VIII, §2), Hilbert's basis theorem, transitivity of integrality, and nondegeneracy of the trace pairing for finite separable extensions. The finite coefficient construction above supplies the inseparable step.
- **Boundary of the construction**: For an arbitrary field $k$, the extension $k^{1/q}/k$ may be infinite. Adjoining all such roots would not establish the required module finiteness; only finitely many coefficient roots are used.
- **Terminology**: For a domain, finiteness of its integral closure in every finite extension of its fraction field is the Japanese property. This should not be used as a synonym for excellence, which imposes additional conditions.
