---
title: "Exercise Rep6: Lie Bracket Verification"
topic: representation-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-theory
source: "Lie Groups, Lie Algebras"
created: 2026-01-19
---

# Exercise Rep6: Lie Bracket Verification

## Problem Statement

> [!question] Problem
> **(a)** Verify that $\mathfrak{sl}_2(\mathbb{C})$ (traceless $2 \times 2$ matrices) with the commutator bracket $[A, B] = AB - BA$ satisfies the axioms of a Lie algebra.
>
> **(b)** For the standard basis of $\mathfrak{sl}_2$:
> $$e = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \quad f = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}, \quad h = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$
>
> Compute all brackets $[e, f]$, $[h, e]$, $[h, f]$ and verify the Jacobi identity for $(e, f, h)$.
>
> **(c)** Show that $\mathfrak{so}_3(\mathbb{R})$ (skew-symmetric $3 \times 3$ matrices) is a Lie algebra. Find a basis and compute the structure constants.
>
> **(d)** Show that $\mathfrak{so}_3(\mathbb{R}) \otimes \mathbb{C} \cong \mathfrak{sl}_2(\mathbb{C})$.

## Hints

> [!hint]- Hint 1 (Part a)
> Check: (1) closure under bracket, (2) bilinearity, (3) antisymmetry $[A, B] = -[B, A]$, (4) Jacobi identity.

> [!hint]- Hint 2 (Part b)
> For Jacobi: compute $[e, [f, h]] + [f, [h, e]] + [h, [e, f]]$ and show it equals zero.

> [!hint]- Hint 3 (Part c)
> A natural basis for $\mathfrak{so}_3$ consists of matrices $L_x, L_y, L_z$ with single entries $\pm 1$.

> [!hint]- Hint 4 (Part d)
> Consider the map $L_x \mapsto i(e + f)$, $L_y \mapsto e - f$, $L_z \mapsto ih$ (up to scaling).

## Solution

> [!success]- Solution
>
> **(a) Lie algebra axioms for $\mathfrak{sl}_2$**
>
> 1. **Closure**: If $\text{tr}(A) = \text{tr}(B) = 0$, then $\text{tr}([A,B]) = \text{tr}(AB - BA) = \text{tr}(AB) - \text{tr}(BA) = 0$. ✓
>
> 2. **Bilinearity**: $(AB - BA)$ is linear in both $A$ and $B$. ✓
>
> 3. **Antisymmetry**: $[A, B] = AB - BA = -(BA - AB) = -[B, A]$. ✓
>
> 4. **Jacobi identity**: For any matrices:
> $$[A, [B, C]] + [B, [C, A]] + [C, [A, B]]$$
> $$= [A, BC - CB] + [B, CA - AC] + [C, AB - BA]$$
> $$= ABC - ACB - BCA + CBA + BCA - BAC - CAB + ACB + CAB - CBA - ABC + BAC$$
> $$= 0 \quad ✓$$
>
> ---
>
> **(b) Bracket computations**
>
> $$[e, f] = ef - fe = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} - \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = h$$
>
> $$[h, e] = he - eh = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} - \begin{pmatrix} 0 & -1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 2 \\ 0 & 0 \end{pmatrix} = 2e$$
>
> $$[h, f] = hf - fh = \begin{pmatrix} 0 & 0 \\ -1 & 0 \end{pmatrix} - \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ -2 & 0 \end{pmatrix} = -2f$$
>
> **Jacobi identity for $(e, f, h)$:**
> $$[e, [f, h]] + [f, [h, e]] + [h, [e, f]]$$
> $$= [e, 2f] + [f, 2e] + [h, h]$$
> $$= 2[e, f] + 2[f, e] + 0$$
> $$= 2h - 2h = 0 \quad ✓$$
>
> ---
>
> **(c) Lie algebra $\mathfrak{so}_3(\mathbb{R})$**
>
> $\mathfrak{so}_3 = \{A \in M_3(\mathbb{R}) : A^T = -A\}$ (skew-symmetric matrices).
>
> Closure: $(AB - BA)^T = B^T A^T - A^T B^T = (-B)(-A) - (-A)(-B) = BA - AB = -(AB - BA)$. ✓
>
> **Standard basis:**
> $$L_x = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & -1 \\ 0 & 1 & 0 \end{pmatrix}, \quad L_y = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ -1 & 0 & 0 \end{pmatrix}, \quad L_z = \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$
>
> **Brackets:**
> $$[L_x, L_y] = L_z, \quad [L_y, L_z] = L_x, \quad [L_z, L_x] = L_y$$
>
> Structure constants: $c_{xy}^z = c_{yz}^x = c_{zx}^y = 1$ (cyclic).
>
> ---
>
> **(d) Isomorphism $\mathfrak{so}_3 \otimes \mathbb{C} \cong \mathfrak{sl}_2(\mathbb{C})$**
>
> Define:
> $$J_+ = L_z + iL_x, \quad J_- = L_z - iL_x, \quad J_0 = iL_y$$
>
> Computing brackets (using $[L_x, L_y] = L_z$ etc.):
> $$[J_0, J_+] = [iL_y, L_z + iL_x] = i[L_y, L_z] + i^2[L_y, L_x] = iL_x + L_z = J_+$$
>
> With appropriate normalization, setting:
> - $e' = \frac{1}{2}(L_z + iL_x)$
> - $f' = \frac{1}{2}(L_z - iL_x)$
> - $h' = iL_y$
>
> We get $[h', e'] = e'$, $[h', f'] = -f'$, $[e', f'] = h'/2$.
>
> Rescaling: $e = 2e'$, $f = 2f'$, $h = 2h'$ gives the standard $\mathfrak{sl}_2$ relations:
> $$[h, e] = 2e, \quad [h, f] = -2f, \quad [e, f] = h$$
>
> Thus $\mathfrak{so}_3(\mathbb{R}) \otimes \mathbb{C} \cong \mathfrak{sl}_2(\mathbb{C})$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/sl2 Representations|sl₂ Representations]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]
