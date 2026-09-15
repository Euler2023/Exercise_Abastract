---
title: "Exercise LA380: Finiteness of Integral Closures in Separable Extensions via Trace Dual Bases"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - noetherian-modules
  - bilinear-forms
  - trace-form
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VII, Extensions of Rings, Exercise 3, printed p. 353, PDF p. 368"
created: 2026-09-15
---

# Exercise LA380: Finiteness of Integral Closures in Separable Extensions via Trace Dual Bases

## Problem Statement

> [!question] Lang, Chapter VII, Exercise 3
> For the following exercises, you can use §1 of Chapter X.
> 
> Let $A$ be an entire ring, integrally closed in its quotient field $K$. Let $L$ be a finite separable extension of $K$, and let $B$ be the integral closure of $A$ in $L$. If $A$ is Noetherian, show that $B$ is a finite $A$-module.
> 
> [Hint: Let $\{w_1,\ldots,w_n\}$ be a basis of $L$ over $K$. Multiplying all elements of this basis by a suitable element of $A$, we may assume without loss of generality that all $w_i$ are integral over $A$. Let $\{w'_1,\ldots,w'_n\}$ be the dual basis relative to the trace, so that $\operatorname{Tr}(w_i w'_j)=\delta_{ij}$. Write an element $\alpha$ of $L$ integral over $A$ in the form
> $$
> \alpha = b_1 w'_1 + \cdots + b_n w'_n
> $$
> with $b_j\in K$. Taking the trace $\operatorname{Tr}(\alpha w_i)$, for $i=1,\ldots,n$, conclude that $B$ is contained in the finite module $Aw'_1+\cdots+Aw'_n$.] Hence $B$ is Noetherian.

## Hints

> [!hint]- Hint 1: Clear denominators to form an integral basis
> Any element $v\in L$ is algebraic over $K$. Multiply by the leading coefficient of an annihilating polynomial to clear denominators and obtain an element of $L$ integral over $A$.

> [!hint]- Hint 2: Deploy the nondegeneracy of the trace form
> Since $L/K$ is finite separable, the symmetric bilinear form $(x,y)\mapsto\operatorname{Tr}_{L/K}(xy)$ is nondegenerate. This ensures the existence of a unique dual basis $\{w'_1,\ldots,w'_n\}$.

> [!hint]- Hint 3: Show that traces of integral elements belong to $A$
> If $\alpha\in B$ and $w_i\in B$, the product $\alpha w_i$ is integral over $A$. What is the relationship between the coefficients of the minimal polynomial of an integral element and the base ring $A$ when $A$ is integrally closed?

> [!hint]- Hint 4: Apply the Noetherian submodule property
> $A$ is Noetherian, so the free module $M=\bigoplus_{i=1}^n A w'_i$ is a Noetherian $A$-module. How does this characterize any $A$-submodule of $M$?

## Solution

> [!success]- Complete Derivation
> Let $A$ be an integral domain (entire ring) with fraction field $K$, integrally closed in $K$. Let $L/K$ be a finite separable field extension of degree $n=[L:K]$, and let $B$ be the integral closure of $A$ in $L$. We assume $A$ is Noetherian.
> 
> ### Step 1: Constructing a $K$-basis of $L$ consisting of elements of $B$
> Let $\{v_1,\ldots,v_n\}$ be an arbitrary $K$-basis of $L$. Each $v_i\in L$ is algebraic over $K$, so there exists a relation:
> $$
> c_{i,d_i} v_i^{d_i} + c_{i,d_i-1} v_i^{d_i-1} + \cdots + c_{i,0} = 0,\qquad c_{i,j}\in A,\quad c_{i,d_i}\ne 0.
> $$
> Multiplying by $c_{i,d_i}^{d_i-1}$ shows that $c_{i,d_i} v_i$ satisfies a monic polynomial with coefficients in $A$, hence $c_{i,d_i} v_i$ is integral over $A$.
> 
> Setting $c = \prod_{i=1}^n c_{i,d_i} \in A\setminus\{0\}$, each $w_i = c v_i$ is integral over $A$, so $w_i\in B$. Since scaling by a nonzero element $c\in K^\times$ preserves linear independence and spanning over $K$, $\{w_1,\ldots,w_n\}\subset B$ is a $K$-basis of $L$.
> 
> ### Step 2: Nondegenerate trace form and the dual basis
> Because $L/K$ is a finite separable extension, the trace bilinear pairing:
> $$
> \mathcal T: L\times L \longrightarrow K,\qquad \mathcal T(x,y) = \operatorname{Tr}_{L/K}(xy)
> $$
> is a symmetric, non-degenerate bilinear form over $K$.
> 
> Nondegeneracy guarantees that there exists a unique dual basis $\{w'_1,\ldots,w'_n\}$ of $L$ over $K$ satisfying:
> $$
> \operatorname{Tr}_{L/K}(w_i w'_j) = \delta_{ij} = \begin{cases} 1, & i=j, \\ 0, & i\ne j. \end{cases}
> $$
> 
> ### Step 3: Containment of $B$ in a finitely generated $A$-module
> Let $\alpha\in B$ be an arbitrary element of the integral closure. Since $\{w'_1,\ldots,w'_n\}$ is a $K$-basis of $L$, we can write:
> $$
> \alpha = \sum_{j=1}^n b_j w'_j,\qquad b_j\in K.
> $$
> 
> For each fixed index $i\in\{1,\ldots,n\}$, multiply by $w_i$ and take the trace from $L$ to $K$:
> $$
> \operatorname{Tr}_{L/K}(\alpha w_i) = \operatorname{Tr}_{L/K}\left(\sum_{j=1}^n b_j w_i w'_j\right) = \sum_{j=1}^n b_j \operatorname{Tr}_{L/K}(w_i w'_j) = \sum_{j=1}^n b_j \delta_{ij} = b_i.
> $$
> 
> Notice that:
> - $\alpha\in B$ is integral over $A$;
> - $w_i\in B$ is integral over $A$;
> - Since $B$ is a subring of $L$, the product $\alpha w_i\in B$ is integral over $A$.
> 
> Let $P(X) = X^m + a_{m-1} X^{m-1} + \cdots + a_0$ be the minimal polynomial of $\alpha w_i$ over $K$. Because $\alpha w_i$ is integral over $A$ and $A$ is integrally closed in $K$, all coefficients of $P(X)$ belong to $A$ (as proved in Lang Ch. VII §1, Proposition 1.4).
> 
> The characteristic polynomial of multiplication by $\alpha w_i$ on $L$ is a power of the minimal polynomial: $P(X)^{[L:K(\alpha w_i)]}$. The trace $\operatorname{Tr}_{L/K}(\alpha w_i)$ is the negative of the second coefficient of this characteristic polynomial, which is an integer multiple of $a_{m-1}\in A$.
> 
> Hence:
> $$
> b_i = \operatorname{Tr}_{L/K}(\alpha w_i) \in A\qquad\text{for all }i=1,\ldots,n.
> $$
> 
> This proves that every $\alpha\in B$ can be expressed as an $A$-linear combination of the dual basis elements:
> $$
> B \subseteq M := A w'_1 + A w'_2 + \cdots + A w'_n.
> $$
> 
> ### Step 4: Noetherian module deduction and conclusion
> The $A$-module $M = \sum_{i=1}^n A w'_i$ is generated by $n$ elements over $A$, hence is a finitely generated $A$-module.
> 
> Since $A$ is a Noetherian ring, every finitely generated $A$-module is a Noetherian $A$-module (Chapter X, §1, Theorem 1.1).
> 
> As an $A$-submodule of the Noetherian $A$-module $M$, the integral closure $B$ is a **finitely generated $A$-module** (a finite $A$-module).
> 
> Furthermore:
> 1. Because $B$ is a finitely generated module over the Noetherian ring $A$, $B$ is a Noetherian $A$-module.
> 2. Every ideal $I$ of the ring $B$ is an $A$-submodule of $B$. Therefore, $I$ is finitely generated as an $A$-module, and a fortiori finitely generated as an ideal of $B$.
> 3. Hence, the ring $B$ is a **Noetherian ring**.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules|Noetherian Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]

## Notes

- **Separability Hypothesis:** The separability of $L/K$ is essential for the nondegeneracy of the trace form. For inseparable extensions in characteristic $p$, the integral closure of a Noetherian domain in a finite extension is not always a finite module (Nagata constructed counterexamples in characteristic $p>0$, though it holds for Krull-Akizuki domains of dimension 1).
- **Application to Number Fields:** When $A=\mathbb Z$ and $K=\mathbb Q$, this theorem proves that the ring of algebraic integers $\mathcal O_L$ of any number field $L$ is a finitely generated $\mathbb Z$-module, which is the foundational starting point for Exercise 4.
- **Independent Derivation:** The solution strictly applies the dual basis technique and Noetherian module characterization from Lang Chapter VII §1 and Chapter X §1.
