---
title: "Exercise Gal140: Primitive Generators of the Subfields of a Thirteenth Cyclotomic Field"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - primitive-elements
  - cyclotomic-fields
  - qualifying-exam
source: "Rice University, Algebra Qualifying Exam, August 21, 2020, Question 3(a)-(b), printed p. 2, PDF p. 2"
created: 2026-10-02
---

# Exercise Gal140: Primitive Generators of the Subfields of a Thirteenth Cyclotomic Field

## Problem Statement

> [!question] Rice University, August 21, 2020, Question 3
> Set $\zeta_{13}=e^{2\pi i/13}$ and $K=\mathbb Q(\zeta_{13})$.
>
> **(a)** Compute the multiplicative order of $2$ in $(\mathbb Z/13\mathbb Z)^\times$.
>
> **(b)** Find every nontrivial proper intermediate field $\mathbb Q\subsetneq E\subsetneq K$. Exhibit a primitive element over $\mathbb Q$ for each such $E$, and specify all inclusions among these fields.

The complete mathematical task, including both parts, is restated above. The [official examination PDF](https://math.rice.edu/sites/g/files/bxs3121/files/inline-files/AlgebraQualFall2020.pdf) places Question 3 on printed p. 2 / PDF p. 2.

## Hints

> [!hint]- Hint 1: Turn the field lattice into a subgroup lattice
> The cyclotomic Galois group is $(\mathbb Z/13\mathbb Z)^\times$. After part (a), use the unique subgroup of each order dividing $12$.

> [!hint]- Hint 2: Sum an orbit
> For a multiplicative subgroup $H\leq(\mathbb Z/13\mathbb Z)^\times$, try $\theta_H=\sum_{h\in H}\zeta_{13}^{h}$. It is fixed by $H$, but this alone only proves $\mathbb Q(\theta_H)\subseteq K^H$.

> [!hint]- Hint 3: Prove that no larger subgroup fixes the sum
> If $\sum_{h\in H}\zeta_{13}^{ah}=\sum_{h\in H}\zeta_{13}^h$, reduce all exponents to $1,\ldots,12$. The difference gives a polynomial of degree at most $12$ with constant coefficient $0$. Compare it with the minimal polynomial $\Phi_{13}(X)=1+X+\cdots+X^{12}$.

## Solution

> [!success]- Solution
> **Proof scope:** Complete independent derivation
>
> Write $\zeta=\zeta_{13}$ throughout.
>
> ### (a) The order of $2$ modulo $13$
>
> The successive powers of $2$, reduced modulo $13$, are
>
> $$
> \begin{array}{c|rrrrrrrrrrrrr}
> j&0&1&2&3&4&5&6&7&8&9&10&11&12\\
> \hline
> 2^j&1&2&4&8&3&6&12&11&9&5&10&7&1.
> \end{array}
> $$
>
> Thus $2$ has order $12$ and generates the entire group $(\mathbb Z/13\mathbb Z)^\times$.
>
> ### (b1) Identify the Galois group and all possible intermediate fields
>
> The polynomial
>
> $$
> \Phi_{13}(X)=1+X+\cdots+X^{12}
> $$
>
> is irreducible over $\mathbb Q$: its translate $\Phi_{13}(X+1)=((X+1)^{13}-1)/X$ is Eisenstein at $13$, because all nonleading coefficients are divisible by $13$ and its constant coefficient is $13$, which is not divisible by $13^2$. Consequently $[K:\mathbb Q]=12$.
>
> The roots of $\Phi_{13}$ are exactly $\zeta^a$ for $a\in(\mathbb Z/13\mathbb Z)^\times$, and they all lie in $K$. Therefore $K/\mathbb Q$ is a finite Galois extension. For each $a$, sending $\zeta$ to $\zeta^a$ defines an automorphism $\sigma_a$; its inverse is $\sigma_{a^{-1}}$, and $\sigma_a\sigma_b=\sigma_{ab}$. Hence
>
> $$
> G=\operatorname{Gal}(K/\mathbb Q)
> \simeq(\mathbb Z/13\mathbb Z)^\times
> =\langle2\rangle\simeq C_{12}.
> $$
>
> A cyclic group of order $12$ has exactly one subgroup $H_h=\langle2^{12/h}\rangle$ of order $h$ for each divisor $h$ of $12$. By the fundamental theorem of Galois theory, the nontrivial proper intermediate fields correspond exactly to $h=2,3,4,6$. Their degrees over $\mathbb Q$ are $12/h$.
>
> ### (b2) Prove that the orbit sums are primitive elements
>
> For any subgroup $H\leq(\mathbb Z/13\mathbb Z)^\times$, define
>
> $$
> \theta_H=\sum_{h\in H}\zeta^h.
> $$
>
> Every $\sigma_a$ with $a\in H$ permutes the summands, so $H$ fixes $\theta_H$. Conversely, suppose $\sigma_a(\theta_H)=\theta_H$. Let $\overline{ah}\in\{1,\ldots,12\}$ denote the representative of $ah$ modulo $13$, and form
>
> $$
> R_a(X)=\sum_{h\in H}X^{\overline{ah}}-\sum_{h\in H}X^h\in\mathbb Q[X].
> $$
>
> Then $R_a(\zeta)=0$, $\deg R_a\leq12$ when $R_a\ne0$, and $R_a(0)=0$. Since $\Phi_{13}$ is the minimal polynomial of $\zeta$, it divides $R_a$. The degree bound makes $R_a=c\Phi_{13}$ for some $c\in\mathbb Q$, and comparison of constant coefficients gives $c=0$. Thus $R_a=0$.
>
> Its coefficients are the differences of the indicator functions of $aH$ and $H$. Therefore $aH=H$, which is equivalent to $a\in H$. We have proved
>
> $$
> \operatorname{Gal}(K/\mathbb Q(\theta_H))=H.
> $$
>
> Galois correspondence now gives $\mathbb Q(\theta_H)=K^H$. This establishes generation of the full fixed field, rather than merely membership in it.
>
> ### (b3) List the fields and their generators
>
> Write $E_d$ for the unique intermediate field of degree $d$ over $\mathbb Q$. The subgroup computations and the preceding proof yield the following complete list:
>
> | Field | Fixing subgroup, as residues modulo $13$ | Primitive element over $\mathbb Q$ |
> | --- | --- | --- |
> | $E_6=K^{H_2}$ | $H_2=\langle2^6\rangle=\{1,12\}$ | $\theta_6=\zeta+\zeta^{12}=\zeta+\zeta^{-1}$ |
> | $E_4=K^{H_3}$ | $H_3=\langle2^4\rangle=\{1,3,9\}$ | $\theta_4=\zeta+\zeta^3+\zeta^9$ |
> | $E_3=K^{H_4}$ | $H_4=\langle2^3\rangle=\{1,5,8,12\}$ | $\theta_3=\zeta+\zeta^5+\zeta^8+\zeta^{12}$ |
> | $E_2=K^{H_6}$ | $H_6=\langle2^2\rangle=\{1,3,4,9,10,12\}$ | $\theta_2=\zeta+\zeta^3+\zeta^4+\zeta^9+\zeta^{10}+\zeta^{12}$ |
>
> In each row $E_d=\mathbb Q(\theta_d)$ and $[\mathbb Q(\theta_d):\mathbb Q]=d$. The subscripts on $H_h$ record subgroup orders, while those on $E_d$ and $\theta_d$ record field degrees.
>
> ### (b4) Determine the complete containment lattice
>
> In a cyclic group, $H_h\subseteq H_k$ exactly when $h$ divides $k$. Galois correspondence reverses inclusion. Thus the strict inclusions among the four nontrivial proper fields are exactly
>
> $$
> E_2\subsetneq E_4,\qquad
> E_2\subsetneq E_6,\qquad
> E_3\subsetneq E_6.
> $$
>
> There are no other inclusions among these four fields: any inclusion would force the smaller degree to divide the larger degree, and the displayed pairs exhaust the divisibility pairs in $\{2,3,4,6\}$. Including the endpoints, the maximal chains are
>
> $$
> \begin{aligned}
> &\mathbb Q\subsetneq E_2\subsetneq E_4\subsetneq K,\\
> &\mathbb Q\subsetneq E_2\subsetneq E_6\subsetneq K,\\
> &\mathbb Q\subsetneq E_3\subsetneq E_6\subsetneq K.
> \end{aligned}
> $$

## Related Concepts

- [[03 - Field Theory/Concepts/Primitive Elements|Primitive Elements]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Fixed Fields|Fixed Fields]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem of Galois Theory]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

- **Source and proof status:** [Rice University, Algebra Qualifying Exam, 2020-08-21, Q. 3(a)–(b), printed p. 2, PDF p. 2]. Both subparts, the root of unity, the modulus, and the request for explicit generators and the containment lattice were checked against a 200 dpi render of the original PDF. The problem is a faithful mathematical restatement; the complete solution above is an independent derivation, not an official examination solution.
- **Imported inputs:** Eisenstein's irreducibility criterion, the subgroup classification of finite cyclic groups, and the fundamental theorem of finite Galois theory. The proof verifies their hypotheses here and proves the orbit-sum stabilizer directly.
- **Meaning of proper intermediate field:** The main list uses $\mathbb Q\subsetneq E\subsetneq K$. If the bottom field is included in the terminology, add $\mathbb Q=\mathbb Q(0)$; the lattice and its endpoints are already specified above.
- **Method boundary:** The primitive element theorem guarantees that these finite separable extensions are simple, but does not by itself provide the displayed generators. Their exact stabilizers provide both generation and the required degrees. No minimal-polynomial expansion or radical expression is required by the source problem.
- **Routing:** This exercise belongs in Galois Theory because subgroup computation and Galois correspondence determine the fields and their inclusions; primitive elements supply the explicit descriptions.
